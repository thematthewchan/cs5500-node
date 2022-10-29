/**
 * @file Implements DAO managing data storage of tuits. Uses mongoose TuitModel
 * to integrate with MongoDB
 */
import Tuit from "../models/Tuit";
import TuitModel from "../mongoose/TuitModel";
import TuitDaoI from "../interfaces/TuitDaoI";
import Tuit2UserModel from "../mongoose/Tuit2UserModel";

/**
 * @class TuitDao Implements Data Access Object managing data storage
 * of Tuits
 */
export default class TuitDao implements TuitDaoI {
  /**
   * Uses TuitModel to retrieve all tuit documents from tuits collection
   * @returns Promise To be notified when the tuits are retrieved from
   * database
   */
  async findAllTuits(): Promise<Tuit[]> {
    return await TuitModel.find();
  }

  /**
   * Uses TuitModel to retrieve single tuit document from tuits collection
   * @param {string} uid User's primary key
   * @returns Promise To be notified when tuit is retrieved from the database
   */
  async findTuitsByUser(uid: string): Promise<Tuit[]> {
    // return await TuitModel.findByUser(uid);
    // return await Tuit2UserModel.find(
    //     {tuit: 1},
    //     {user: uid,
    //     _id: 0}
    // )
    // .populate('tuits')
    return await TuitModel.find({ postedBy: uid })
  }

  /**
   * Uses TuitModel to retrieve single tuit document from tuits collection
   * @param {string} tid Tuit's primary key
   * @returns Promise To be notified when tuit is retrieved from the database
   */
  async findTuitById(tid: string): Promise<any> {
    return await TuitModel.findById(tid);
  }

  /**
   * Inserts tuit instance into the database
   * @param {Tuit} tuit Instance to be inserted into the database
   * @returns Promise To be notified when tuit is inserted into the database
   */
  async createTuit(tuit: Tuit): Promise<any> {
    return await TuitModel.create(tuit);
  }

  /**
   * Removes tuit from the database.
   * @param {string} tid Primary key of tuit to be removed
   * @returns Promise To be notified when tuit is removed from the database
   */
  async deleteTuit(tid: string): Promise<any> {
    return await TuitModel.deleteOne({ _id: tid });
  }

  /**
   * Updates tuit with new values in database
   * @param {string} tid Primary key of tuit to be modified
   * @param {Tuit} tuit Tuit object containing properties and their new values
   * @returns Promise To be notified when tuit is updated in the database
   */
  async updateTuit(tid: string, tuit: Tuit): Promise<any> {
    return await TuitModel.updateOne({ _id: tid, $set: tuit });
  }
}
