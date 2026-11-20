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
}

document.querySelector("#export-issue")?.addEventListener("click", exportIssue);
