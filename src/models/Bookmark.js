/**
 * @typedef Bookmark Represents bookmark relationship between a user and a tuit,
 * as in a user bookmarks a tuit
 * @property {Tuit} tuit Tuit being bookmarked
 * @property {User} likedBy User bookmarking the tuit
 */
export default class Bookmark {
    constructor() {
        this.bookmarkedTuit = null;
        this.bookmarkedBy = null;
    }
}
