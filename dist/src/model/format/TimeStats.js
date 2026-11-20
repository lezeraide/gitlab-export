"use strict";
(() => {
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
})();
