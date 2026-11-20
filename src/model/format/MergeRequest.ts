import { Milestone } from "./Milestone.js";
import { Pipeline } from "./Pipeline.js";
import { TimeStats } from "./TimeStats.js";
import { User } from "./User.js";

export class MergeRequest {
    private iid: number;

    private assignees: User[];
    private mergedBy: User|null;
    private reviewers: User[];

    private createdAt: string;
    private mergedAt: string;
    private closedAt: string;

    private title: string;
    private description: string;

    private hasConflicts: boolean;

    private labels: string[];

    private milestone: Milestone|null;

    private pipeline: Pipeline|null;

    private sourceBranch: string;
    private targetBranch: string;

    private state: string;

    private timeStats: TimeStats|null;


    constructor(data: any) {
        this.iid = data.iid ?? null;

        this.assignees = data.assignees ? data.assignees.map((ass: object) => new User(ass)) : [];
        this.mergedBy = data.merged_by ? new User(data.merged_by) : null;
        this.reviewers = data.reviewers ? data.assignees.map((rev: object) => new User(rev)) : null;

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

    public getIid(): number { return this.iid; }

    public getAssignes(): User[] { return this.assignees; }

    public getMergedBy(): User|null { return this.mergedBy; }

    public getReviewers(): User[] { return this.reviewers; }

    public getCreatedAt(): string { return this.createdAt; }

    public getMergedAt(): string { return this.mergedAt; }

    public getClosedAt(): string { return this.closedAt; }

    public getTitle(): string { return this.title; }

    public getDescription(): string { return this.description; }

    public getHasConflicts(): boolean { return this.hasConflicts; }

    public getLabels(): string[] { return this.labels; }

    public getMilestone(): Milestone|null { return this.milestone; }

    public getPipeline(): Pipeline|null { return this.pipeline; }

    public getSourceBranch(): string { return this.sourceBranch; }

    public getTargetBranch(): string { return this.targetBranch; }

    public getState(): string { return this.state; }

    public getTimeStats(): TimeStats|null { return this.timeStats; }

}