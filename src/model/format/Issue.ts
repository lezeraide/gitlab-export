import type { MergeRequest } from "./MergeRequest.js";
import { Milestone } from "./Milestone.js";
import type { Note } from "./Note.js";
import { User } from "./User.js";

export class Issue {
    private iid: number;
    private title: string;
    private description: string;

    private author: User|null;
    private assignees: User[];

    private createdAt: string;
    private closedAt: string;

    private labels: string[];

    private milestone: Milestone|null;

    private state: string;

    private mergeRequests: MergeRequest[];

    public notes: Note[];

    constructor(data: any, mergeRequests: MergeRequest[], notes: Note[]) {
        if (!data["iid"]) { throw new Error("Gitlab issue without id ? Wut ?"); }

        this.iid = data.iid ?? null;
        this.title = data.title ?? null;
        this.description = data.description ?? null;

        this.author = data.author ? new User(data.author) : null;
        this.assignees = data.assignees ? data.assignees.map((ass: object) => new User(ass)) : [];

        this.createdAt = data.created_at ?? null;
        this.closedAt = data.closed_at ?? null;

        this.labels = data.labels ?? [];

        this.milestone = data.milestone ? new Milestone(data.milestone) : null;

        this.state = data.state ?? null;

        this.mergeRequests = mergeRequests ?? [];
        this.notes = notes ?? [];
    }
    
    public getIid(): number { return this.iid; }

    public getTitle(): string { return this.title; }

    public getDescription(): string { return this.description; }

    public getAuthor(): User|null { return this.author; }

    public getAssignees(): User[] { return this.assignees; }

    public getCreatedAt(): string { return this.createdAt; }

    public getClosedAt(): string { return this.closedAt; }

    public getLabels(): string[] { return this.labels; }

    public getMilestone(): Milestone|null { return this.milestone; }

    public getState(): string { return this.state; }

    public getMergeRequests(): MergeRequest[] { return this.mergeRequests; }

    public getNotes(): Note[] { return this.notes; }

}