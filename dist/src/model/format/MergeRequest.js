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
})();
