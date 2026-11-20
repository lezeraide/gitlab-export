import browser from "webextension-polyfill";
import { Fetcher } from "./service/fetcher.js";
import { Formatter } from "./service/formatter.js";
import { Writer } from "./service/writer.js";

const formatter = new Formatter();
const writer = new Writer();

interface PageContext {
    url: string;
    projectId: string | undefined;
}

// La popup n'a pas accès à la page : on exécute un script dans l'onglet actif pour récupérer son URL et le projectId.
async function getPageContext(): Promise<PageContext> {
    const [result] = await browser.tabs.executeScript({
        code: `({ url: location.href, projectId: document.body.dataset.projectId })`
    });
    return result as PageContext;
}

function downloadJson(json: string, filename = "data.json") {
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    browser.downloads.download({
        url: url,
        filename: filename,
        saveAs: false
    }).then((downloadId) => {
        // Clean memory
        browser.downloads.onChanged.addListener(function onChanged(delta) {
            if (delta.id === downloadId && delta.state && delta.state.current === "complete") {
                URL.revokeObjectURL(url);
                browser.downloads.onChanged.removeListener(onChanged);
            }
        });
    }).catch((error) => {
        console.error("Download failed:", error);
        URL.revokeObjectURL(url);
    });
}

async function exportIssue() {
    const { url, projectId } = await getPageContext();
    const fetcher = new Fetcher(url, projectId);

    const [issueResponse, issueNotesResponse, issueMergeRequestsResponse] = await Promise.all([
        fetcher.getIssue(),
        fetcher.getIssueNotes(),
        fetcher.getIssueMergeRequests()
    ]);

    const notes = await issueNotesResponse.json();
    const formattedNotes = formatter.formatIssueNotes(notes);

    const mrs = await issueMergeRequestsResponse.json();
    const formattedMergeRequests = formatter.formatIssueMergeRequests(mrs);

    const issue = await issueResponse.json();
    const formattedIssue = formatter.formatIssue(issue, formattedMergeRequests, formattedNotes);

    const issueJson = writer.writeJson(formattedIssue);

    downloadJson(issueJson, `issue#${formattedIssue.getIid()}.json`);
}

document.querySelector("#export-issue")?.addEventListener("click", exportIssue);
