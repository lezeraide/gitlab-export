"use strict";
(() => {
  // src/model/format/Milestone.ts
  var Milestone = class {
    title;
    description;
    state;
    expired;
    constructor(data) {
      this.title = data.title ?? null;
      this.description = data.description ?? null;
      this.state = data.state ?? null;
      this.expired = data.expired ?? false;
    }
    getTitle() {
      return this.title;
    }
    getDescription() {
      return this.description;
    }
    getState() {
      return this.state;
    }
    getExpired() {
      return this.expired;
    }
  };

  // src/model/format/User.ts
  var User = class {
    name;
    nickname;
    active;
    constructor(data) {
      this.name = data.name ?? null;
      this.nickname = data.username ?? null;
      this.active = data.active ?? false;
    }
    getName() {
      return this.name;
    }
    getNickName() {
      return this.nickname;
    }
    getActive() {
      return this.active;
    }
  };

  // src/model/format/Issue.ts
  var Issue = class {
    iid;
    title;
    description;
    author;
    assignees;
    createdAt;
    closedAt;
    labels;
    milestone;
    state;
    mergeRequests;
    notes;
    constructor(data, mergeRequests, notes) {
      if (!data["iid"]) {
        throw new Error("Gitlab issue without id ? Wut ?");
      }
      this.iid = data.iid ?? null;
      this.title = data.title ?? null;
      this.description = data.description ?? null;
      this.author = data.author ? new User(data.author) : null;
      this.assignees = data.assignees ? data.assignees.map((ass) => new User(ass)) : [];
      this.createdAt = data.created_at ?? null;
      this.closedAt = data.closed_at ?? null;
      this.labels = data.labels ?? [];
      this.milestone = data.milestone ? new Milestone(data.milestone) : null;
      this.state = data.state ?? null;
      this.mergeRequests = mergeRequests ?? [];
      this.notes = notes ?? [];
    }
    getIid() {
      return this.iid;
    }
    getTitle() {
      return this.title;
    }
    getDescription() {
      return this.description;
    }
    getAuthor() {
      return this.author;
    }
    getAssignees() {
      return this.assignees;
    }
    getCreatedAt() {
      return this.createdAt;
    }
    getClosedAt() {
      return this.closedAt;
    }
    getLabels() {
      return this.labels;
    }
    getMilestone() {
      return this.milestone;
    }
    getState() {
      return this.state;
    }
    getMergeRequests() {
      return this.mergeRequests;
    }
    getNotes() {
      return this.notes;
    }
  };

  // src/model/format/Pipeline.ts
  var Pipeline = class {
    iid;
    createdAt;
    updatedAt;
    source;
    status;
    constructor(data) {
      this.iid = data.iid ?? null;
      this.createdAt = data.created_at ?? null;
      this.updatedAt = data.updated_at ?? null;
      this.source = data.source ?? null;
      this.status = data.status ?? null;
    }
    getIid() {
      return this.iid;
    }
    getCreatedAt() {
      return this.createdAt;
    }
    getUpdatedAt() {
      return this.updatedAt;
    }
    getSource() {
      return this.source;
    }
    getStatus() {
      return this.status;
    }
  };

  // src/model/format/TimeStats.ts
  var TimeStats = class {
    humanTimeEstimate;
    humanTotalTimeSpent;
    timeEstimate;
    totalTimeSpent;
    constructor(data) {
      this.humanTimeEstimate = data.human_time_estimate ?? null;
      this.humanTotalTimeSpent = data.human_total_time_spent ?? null;
      this.timeEstimate = data.time_estimate ?? null;
      this.totalTimeSpent = data.total_time_spent ?? null;
    }
    getHumanTimeEstimate() {
      return this.humanTimeEstimate;
    }
    getHumanTotalTimeSpent() {
      return this.humanTotalTimeSpent;
    }
    getTimeEstimate() {
      return this.timeEstimate;
    }
    getTotalTimeSpent() {
      return this.totalTimeSpent;
    }
  };

  // src/model/format/MergeRequest.ts
  var MergeRequest = class {
    iid;
    assignees;
    mergedBy;
    reviewers;
    createdAt;
    mergedAt;
    closedAt;
    title;
    description;
    hasConflicts;
    labels;
    milestone;
    pipeline;
    sourceBranch;
    targetBranch;
    state;
    timeStats;
    constructor(data) {
      this.iid = data.iid ?? null;
      this.assignees = data.assignees ? data.assignees.map((ass) => new User(ass)) : [];
      this.mergedBy = data.merged_by ? new User(data.merged_by) : null;
      this.reviewers = data.reviewers ? data.assignees.map((rev) => new User(rev)) : null;
      this.createdAt = data.created_at ?? null;
      this.mergedAt = data.merged_at ?? null;
      this.closedAt = data.closed_at ?? null;
      this.title = data.title ?? null;
      this.description = data.description ?? null;
      this.hasConflicts = data.has_conflicts ?? null;
      this.labels = data.labels ?? [];
      this.milestone = data.milestone ? new Milestone(data.milestone) : null;
      this.pipeline = data.pipeline ? new Pipeline(data.pipeline) : null;
      this.sourceBranch = data.source_branch ?? null;
      this.targetBranch = data.target_branch ?? null;
      this.state = data.state;
      this.timeStats = data.time_stats ? new TimeStats(data.time_stats) : null;
    }
    getIid() {
      return this.iid;
    }
    getAssignes() {
      return this.assignees;
    }
    getMergedBy() {
      return this.mergedBy;
    }
    getReviewers() {
      return this.reviewers;
    }
    getCreatedAt() {
      return this.createdAt;
    }
    getMergedAt() {
      return this.mergedAt;
    }
    getClosedAt() {
      return this.closedAt;
    }
    getTitle() {
      return this.title;
    }
    getDescription() {
      return this.description;
    }
    getHasConflicts() {
      return this.hasConflicts;
    }
    getLabels() {
      return this.labels;
    }
    getMilestone() {
      return this.milestone;
    }
    getPipeline() {
      return this.pipeline;
    }
    getSourceBranch() {
      return this.sourceBranch;
    }
    getTargetBranch() {
      return this.targetBranch;
    }
    getState() {
      return this.state;
    }
    getTimeStats() {
      return this.timeStats;
    }
  };

  // src/model/format/Note.ts
  var Note = class {
    id;
    author;
    createdAt;
    updatedAt;
    content;
    type;
    constructor(data) {
      this.id = data.id ?? null;
      this.author = data.author ? new User(data.author) : null;
      this.createdAt = data.created_at ?? null;
      this.updatedAt = data.updated_at ?? null;
      this.content = data.body ?? null;
      this.type = data.type ?? null;
    }
    getId() {
      return this.id;
    }
    getAuthor() {
      return this.author;
    }
    getCreatedAt() {
      return this.createdAt;
    }
    getUpdatedAt() {
      return this.updatedAt;
    }
    getContent() {
      return this.content;
    }
    getType() {
      return this.type;
    }
  };

  // src/service/formatter.ts
  var Formatter = class {
    formatIssueNotes(data) {
      if (!Array.isArray(data)) {
        console.error("Notes are not distributed as an array !");
        return [];
      }
      return Array.from(data).map((note) => new Note(note));
    }
    formatIssueMergeRequests(data) {
      if (!Array.isArray(data)) {
        console.error("Merge requests are not distributed as an array !");
        return [];
      }
      return Array.from(data).map((mr) => new MergeRequest(mr));
    }
    formatIssue(data, mrs, notes) {
      return new Issue(data, mrs, notes);
    }
  };
})();
