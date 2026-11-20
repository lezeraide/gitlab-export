export class TimeStats {
    private humanTimeEstimate: string;
    private humanTotalTimeSpent: string;

    private timeEstimate: string;
    private totalTimeSpent: string;

    constructor(data: any) {
        this.humanTimeEstimate = data.human_time_estimate ?? null;
        this.humanTotalTimeSpent = data.human_total_time_spent ?? null;

        this.timeEstimate = data.time_estimate ?? null;
        this.totalTimeSpent = data.total_time_spent ?? null;
    }

    public getHumanTimeEstimate(): string { return this.humanTimeEstimate; }

    public getHumanTotalTimeSpent(): string { return this.humanTotalTimeSpent; }

    public getTimeEstimate(): string { return this.timeEstimate; }

    public getTotalTimeSpent(): string { return this.totalTimeSpent; }
    
}