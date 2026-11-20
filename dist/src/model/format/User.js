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
})();
