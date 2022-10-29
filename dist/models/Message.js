"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @typedef Message Represents messaging relationship between a user and a user,
 * as in a user messages a user
 * @property {string} message Text being sent
 * @property {User} to User being messaged
 * @property {User} from User sending message
 * @property {Date} sentOn Date message was sent
 */
class Message {
    constructor() {
        this.message = '';
        this.to = null;
        this.from = null;
        this.sentOn = new Date();
    }
}
exports.default = Message;
//# sourceMappingURL=Message.js.map