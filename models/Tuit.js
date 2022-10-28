/**
 * @typedef Tuit Represents a tuit post
 * @property {string} tuit Text of tuit being posted
 * @property {Date} postedOn Date post was made
 * @property {User} postedBy User the post was made by
 */
export default class Tuit {
    constructor() {
        this.tuit = '';
        this.postedOn = new Date();
        this.postedBy = null;
    }
}
