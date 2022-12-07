/**
 * @file Declares Tuit data type representing a post
 */
import User from "./User";

/**
 * @typedef Tuit Represents a tuit post
 * @property {string} tuit Text of tuit being posted
 * @property {Date} postedOn Date post was made
 * @property {User} postedBy User the post was made by
 */
export default class Tuit {
  private tuit: string = '';
  private postedOn: Date = new Date();
  private postedBy: User | null = null;
  public stats: {
    replies: number;
    retuits: number;
    likes: number;
    dislikes: number;
  };
}
