/**
 * @file Implements DAO managing data storage of users. Uses mongoose UserModel
 * to integrate with MongoDB
 */
import User from "../models/User";
import UserModel from "../mongoose/UserModel";
import UserDaoI from "../interfaces/UserDaoI";

/**
 * @class UserDao Implements Data Access Object managing data storage
 * of Users
 */
export default class UserDao implements UserDaoI {
  /**
   * Uses UserModel to retrieve all user documents from users collection
   * @returns Promise To be notified when the users are retrieved from
   * database
   */
  async findAllUsers(): Promise<User[]> {
    return await UserModel.find();
  }

  /**
   * Uses UserModel to retrieve single user document from users collection
   * @param {string} uid User's primary key
   * @returns Promise To be notified when user is retrieved from the database
   */
  async findUserById(uid: string): Promise<any> {
    return await UserModel.findById(uid);
  }

  /**
   * Uses UserModel to retrieve single user document from users collection
   * @param {string} username User's username
   * @returns Promise To be notified when user is retrieved from the database
   */
  async findUserByUsername(username: string): Promise<any> {
    return await UserModel.findById({ username: username });
  }

  /**
   * Inserts user instance into the database
   * @param {User} user Instance to be inserted into the database
   * @returns Promise To be notified when user is inserted into the database
   */
  async createUser(user: User): Promise<any> {
    return await UserModel.create(user);
  }

  /**
   * Removes user from the database.
   * @param {string} uid Primary key of user to be removed
   * @returns Promise To be notified when user is removed from the database
   */
  async deleteUser(uid: string): Promise<any> {
    return await UserModel.deleteOne({ _id: uid });
  }

  /**
   * Removes user from the database by username.
   * @param {string} username Username of user to be removed
   * @returns Promise To be notified when user is removed from the database
   */
  async deleteUsersByUsername(username: string): Promise<any> {
    return await UserModel.deleteOne({ username: username });
  }

  /**
   * Updates user with new values in database
   * @param {string} uid Primary key of user to be modified
   * @param {User} user User object containing properties and their new values
   * @returns Promise To be notified when user is updated in the database
   */
  async updateUser(uid: string, user: any): Promise<any> {
    return await UserModel.updateOne({ _id: uid }, { $set: user });
  }
}
