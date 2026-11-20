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
})();
