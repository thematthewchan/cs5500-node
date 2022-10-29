"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file Declares User data type representing a user
 */
const AccountType_1 = __importDefault(require("./AccountType"));
const MaritalStatus_1 = __importDefault(require("./MaritalStatus"));
/**
 * @typedef User Represents a user
 * @property {string} id ID of user account
 * @property {string} username Username of user account
 * @property {string} password Password of user account
 * @property {string} firstName First Name of user account
 * @property {string} lastName Last Name of user account
 * @property {string} email Email of user account
 * @property {string} headerImage URL of user header image
 * @property {AccountType} accountType Type of user account
 * @property {MaritalStatus} maritalStatus Marital Status of user
 * @property {string} biography Bio of user
 * @property {Date} dateOfBirth Date user was born
 * @property {Date} joined Date user account was created
 * @property {Location} location Location of user
 */
class User {
    constructor(id, username, password) {
        this.username = '';
        this.password = '';
        this.firstName = null;
        this.lastName = null;
        this.email = '';
        this.profilePhoto = null;
        this.headerImage = null;
        this.accountType = AccountType_1.default.Personal;
        this.maritalStatus = MaritalStatus_1.default.Single;
        this.biography = null;
        this.dateOfBirth = null;
        this.joined = new Date();
        this.location = null;
        this.id = id;
        this.username = username;
        this.password = password;
    }
}
exports.default = User;
//# sourceMappingURL=User.js.map