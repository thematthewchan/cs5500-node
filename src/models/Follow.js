/**
 * @typedef Follow Represents follows relationship between a user and a user,
 * as in a user follows a user
 * @property {User} userFollowed User being followed
 * @property {User} userFollowing User following the user
 */
export default class Follow {
    constructor() {
        this.userFollowed = null;
        this.userFollowing = null;
    }
}
