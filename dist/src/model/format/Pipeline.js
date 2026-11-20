"use strict";
(() => {
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
})();
