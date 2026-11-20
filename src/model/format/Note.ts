import { User } from "./User.js";

export class Note {
    private id: number;

    private author: User|null;
    
    private createdAt: string;
    private updatedAt: string;

    private content: string;
    private type: string;

    constructor(data: any) {
        this.id = data.id ?? null;

        this.author = data.author ? new User(data.author) : null;

        this.createdAt = data.created_at ?? null;
        this.updatedAt = data.updated_at ?? null;

        this.content = data.body ?? null;
        this.type = data.type ?? null;
    }

    public getId(): number { return this.id; }

    public getAuthor(): User|null { return this.author; }

    public getCreatedAt(): string { return this.createdAt; }

    public getUpdatedAt(): string { return this.updatedAt; }

    public getContent(): string { return this.content; }

    public getType(): string { return this.type; }

}