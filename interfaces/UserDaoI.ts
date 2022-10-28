/**
 * @file Declares API for User related data access object methods
 */
import User from "../models/User";

export default interface UserDaoI {
  findAllUsers(): Promise<User[]>;
  findUserById(uid: string): Promise<User>;
  createUser(user: User): Promise<User>;
  updateUser(uid: string, user: User): Promise<any>;
  deleteUser(uid: string): Promise<any>;
}
