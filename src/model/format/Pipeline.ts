export class Pipeline {
    private iid: string;

    private createdAt: string;
    private updatedAt: string;

    private source: string;
    private status: string; 

    constructor(data: any) {
        this.iid = data.iid ?? null;

        this.createdAt = data.created_at ?? null;
        this.updatedAt = data.updated_at ?? null;

        this.source = data.source ?? null;
        this.status = data.status ?? null;
    }

    public getIid(): string { return this.iid; }

    public getCreatedAt(): string { return this.createdAt; }

    public getUpdatedAt(): string { return this.updatedAt; }

    public getSource(): string { return this.source; }

    public getStatus(): string { return this.status; }
}