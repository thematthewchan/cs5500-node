"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @typedef Follow Represents follows relationship between a user and a user,
 * as in a user follows a user
 * @property {User} userFollowed User being followed
 * @property {User} userFollowing User following the user
 */
class Follow {
    constructor() {
        this.userFollowed = null;
        this.userFollowing = null;
    }
}
exports.default = Follow;
//# sourceMappingURL=Follow.js.map