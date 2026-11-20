"use strict";
(() => {
  // src/service/fetcher.ts
  var Fetcher = class {
    base_url = "https://gitlab.com/api/v4/projects";
    issueId;
    projectId;
    constructor(url, projectId) {
      this.issueId = url.split("work_items/")[1]?.split(/[?#/]/)[0];
      this.projectId = projectId;
      console.log(this.issueId);
      console.log(this.projectId);
    }
    getIssue() {
      return fetch(`${this.base_url}/${this.projectId}/issues/${this.issueId}`);
    }
    getIssueNotes() {
      return fetch(`${this.base_url}/${this.projectId}/issues/${this.issueId}/notes`);
    }
    getIssueMergeRequests() {
      return fetch(`${this.base_url}/${this.projectId}/issues/${this.issueId}/related_merge_requests`);
    }
  };
})();
