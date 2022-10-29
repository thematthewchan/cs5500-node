"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @typedef Tuit Represents a tuit post
 * @property {string} tuit Text of tuit being posted
 * @property {Date} postedOn Date post was made
 * @property {User} postedBy User the post was made by
 */
class Tuit {
    constructor() {
        this.tuit = '';
        this.postedOn = new Date();
        this.postedBy = null;
    }
}
exports.default = Tuit;
//# sourceMappingURL=Tuit.js.map