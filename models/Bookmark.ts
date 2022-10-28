/**
 * @file Declares Bookmark data type representing relationship between
 * users and tuits, as in user bookmarks a tuit
 */
import User from "./User";
import Tuit from "./Tuit";

/**
 * @typedef Bookmark Represents bookmark relationship between a user and a tuit,
 * as in a user bookmarks a tuit
 * @property {Tuit} tuit Tuit being bookmarked
 * @property {User} likedBy User bookmarking the tuit
 */
export default class Bookmark {
  private bookmarkedTuit: Tuit | null = null;
  private bookmarkedBy: User | null = null;
}
