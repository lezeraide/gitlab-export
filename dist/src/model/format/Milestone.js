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
})();
