import User from "./User";
import Tuit from "./Tuit";

export default class Like {
  private tuit: Tuit | null = null;
  private likedBy: User | null = null;
}
