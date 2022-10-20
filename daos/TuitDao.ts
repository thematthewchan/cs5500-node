import Tuit from "../models/Tuit";
import TuitModel from "../mongoose/TuitModel";
import TuitDaoI from "../interfaces/TuitDaoI";
import Tuit2UserModel from "../mongoose/Tuit2UserModel";

export default class TuitDao implements TuitDaoI {
  private static tuitDao: TuitDao | null = null
  public static getInstance = (): TuitDao => {
    if (TuitDao.tuitDao === null) {
      TuitDao.tuitDao = new TuitDao()
    }
    return TuitDao.tuitDao
  }

  async findAllTuits(): Promise<Tuit[]> {
    return await TuitModel.find();
  }
  async findTuitsByUser(uid: string): Promise<Tuit[]> {
    // return await TuitModel.findByUser(uid);
    // return await Tuit2UserModel.find(
    //     {tuit: 1},
    //     {user: uid,
    //     _id: 0}
    // )
    // .populate('tuits')
    return await TuitModel.find({postedBy: uid})
  }
  // async findTuitById(tid: string): Promise<Tuit> {
    async findTuitById(tid: string): Promise<any> {
      return await TuitModel.findById(tid);
  }
  // async createTuit(tuit: Tuit): Promise<Tuit> {
  // async createTuit(tuit: Tuit): Promise<any> {
  async createTuit(tuit: Tuit): Promise<Tuit> {
    return await TuitModel.create(tuit);
  }
  async deleteTuit(tid: string): Promise<any> {
    return await TuitModel.deleteOne({_id: tid});
  }
  async updateTuit(tid: string, tuit: Tuit): Promise<any> {
    return await TuitModel.updateOne({_id: tid}, {$set: tuit});
  }
}
