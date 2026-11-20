import browser from "webextension-polyfill";
import { Fetcher } from "./service/fetcher.js";
import { Formatter } from "./service/formatter.js";

const formatter = new Formatter();

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

function downloadJson(dataObj: any, filename = "data.json") {
    // 1. Convert JS object to a formatted JSON string
    const jsonString = JSON.stringify(dataObj, null, 2);

    // 2. Create a Blob and a temporary Object URL
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    // 3. Trigger the browser download
    browser.downloads.download({
        url: url,
        filename: filename,
        saveAs: false // Set to true if you want to prompt the user where to save
    }).then((downloadId) => {
        console.log("DOWNLOADED");
        // Clean up memory once the download finishes
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

    console.log(formattedIssue);

    // Example usage:
    const myData = { user: "dev", timestamp: Date.now(), items: [1, 2, 3] };
    downloadJson(myData, "export.json");

}

document.querySelector("#export-issue")?.addEventListener("click", exportIssue);
