/**
 * @file Declares API for Tuit related data access object methods
 */
import Tuit from "../models/Tuit";

export default interface TuitDaoI {
  findAllTuits(): Promise<Tuit[]>;
  findTuitsByUser(uid: string): Promise<Tuit[]>;
  findTuitById(tid: string): Promise<Tuit>;
  createTuit(tuit: Tuit): Promise<Tuit>;
  createTuitByUser(uid: string, tuit: Tuit): Promise<Tuit>;
  updateTuit(tid: string, tuit: Tuit): Promise<any>;
  updateLikes(tid: string, newStats: any): Promise<any>;
  deleteTuit(tid: string): Promise<any>;
}
