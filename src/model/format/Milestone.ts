export class Milestone {
    private title: string;
    private description: string;

    private state: string;
    private expired: boolean;

    constructor(data: any) {
        this.title = data.title ?? null;
        this.description = data.description ?? null;

        this.state = data.state ?? null;
        this.expired = data.expired ?? false;
    }

    public getTitle(): string { return this.title; }

    public getDescription(): string { return this.description; }

    public getState(): string { return this.state; }

    public getExpired(): boolean { return this.expired; }
}