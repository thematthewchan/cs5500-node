class Actor {
    private id: string;
    private fName: string;
    private lName: string;
    constructor(id: string, fName: string, lName: string) {
        this.id = id;
        this.fName = fName;
        this.lName = lName;
    }
    get mid(): string {
        return this.id;
    }
    get firstName(): string {
        return this.firstName;
    }
    get lastName(): string {
        return this.lastName
    }
};

export default Actor;
