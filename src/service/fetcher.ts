export class Fetcher {

    private readonly base_url = "https://gitlab.com/api/v4/projects";

    private issueId: string | undefined;
    private projectId: string | undefined;

    constructor(url: string, projectId: string | undefined) {
        this.issueId = url.split("work_items/")[1]?.split(/[?#/]/)[0];
        this.projectId = projectId;
    }


    public getIssue(): Promise<Response> {
        return fetch(`${this.base_url}/${this.projectId}/issues/${this.issueId}`);
    }

    public getIssueNotes(): Promise<Response> {
        return fetch(`${this.base_url}/${this.projectId}/issues/${this.issueId}/notes`);
    }

    public getIssueMergeRequests(): Promise<Response> {
        return fetch(`${this.base_url}/${this.projectId}/issues/${this.issueId}/related_merge_requests`);
    }

}
