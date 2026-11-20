export class User {
    private name: string;
    private nickname: string;

    private active: boolean;

    constructor(data: any) {
        this.name = data.name ?? null;
        this.nickname = data.username ?? null;

        this.active = data.active ?? false;
    }

    public getName(): string { return this.name; }

    public getNickName(): string { return this.nickname; }

    public getActive(): boolean { return this.active; }
}