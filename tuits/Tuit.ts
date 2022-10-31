import User from "../users/User";

export default class Tuit {
    private id: string;
    private tuit: string;
    private postedOn: Date;
    private postedBy: User | null;

    constructor(id: string, tuit: string, postedOn: Date) {
        this.id = id;
        this.tuit = tuit;
        this.postedOn = postedOn;
        this.postedBy = null;
    }
    public set author(user: User | null) { this.postedBy = user; }
    public get author(): User | null { return this.postedBy; }
    public get post(): string { return this.tuit; }
}
