/**
 * @file Declares User data type representing a user
 */
import AccountType from "./AccountType";
import MaritalStatus from "./MaritalStatus";
import Location from "./Location";

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
export default class User {
  private id: string;
  private username: string = '';
  private password: string = '';
  private firstName: string | null = null;
  private lastName: string | null = null;
  private email: string = '';
  private profilePhoto: string | null = null;
  private headerImage: string | null = null;
  private accountType: AccountType = AccountType.Personal;
  private maritalStatus: MaritalStatus = MaritalStatus.Single;
  private biography: string | null = null;
  private dateOfBirth: Date | null = null;
  private joined: Date = new Date();
  private location: Location | null = null;

  constructor(id: string, username: string, password: string) {
    this.id = id; this.username = username; this.password = password;
  }
}
