/**
 * @file Declares Like data type representing relationship between
 * users and tuits, as in user likes a tuit
 */
import User from "./User";
import Tuit from "./Tuit";

/**
 * @typedef Like Represents likes relationship between a user and a tuit,
 * as in a user likes a tuit
 * @property {Tuit} tuit Tuit being liked
 * @property {User} likedBy User liking the tuit
 */
export default class Like {
  public tuit: Tuit | null = null;
  private likedBy: User | null = null;
}
