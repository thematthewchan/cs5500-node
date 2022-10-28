/**
 * @file Declares Message data type representing messaging between
 * users and users, as in user messages a user
 */
import User from "./User";

/**
 * @typedef Message Represents messaging relationship between a user and a user,
 * as in a user messages a user
 * @property {string} message Text being sent
 * @property {User} to User being messaged
 * @property {User} from User sending message
 * @property {Date} sentOn Date message was sent
 */
export default class Message {
    private message: string = '';
    private to: User | null = null
    private from: User | null = null
    private sentOn: Date = new Date();
}
