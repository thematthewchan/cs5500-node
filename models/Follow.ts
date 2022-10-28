/**
 * @file Declares Follow data type representing relationship between
 * users and users, as in user follows a user
 */
import User from "./User";

/**
 * @typedef Follow Represents follows relationship between a user and a user,
 * as in a user follows a user
 * @property {User} userFollowed User being followed
 * @property {User} userFollowing User following the user
 */
export default class Follow {
  private userFollowed: User | null = null;
  private userFollowing: User | null = null;
}
