"use strict";
(() => {
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
})();
