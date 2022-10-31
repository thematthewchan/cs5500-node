/**
 * @file Implements DAO managing data storage of likes. Uses mongoose LikeModel
 * to integrate with MongoDB
 */
import Like from "../models/Like";
import LikeModel from "../mongoose/LikeModel";
import LikeDaoI from "../interfaces/LikeDaoI";

/**
 * @class LikeDao Implements Data Access Object managing data storage
 * of Likes
 */
export default class LikeDao implements LikeDaoI {
    private static likeDao: LikeDao | null = null
    public static getInstance = (): LikeDao => {
        if (LikeDao.likeDao === null) {
            LikeDao.likeDao = new LikeDao()
        }
        return LikeDao.likeDao
    }

    /**
     * Inserts like instance into the database
     * @param {string} uid Primary key of user
     * @param {string} tid Primary key of tuit
     * @returns Promise To be notified when like is inserted into the database
     */
    async userLikesTuit(uid: string, tid: string): Promise<any> {
        return await LikeModel.create({ tuit: tid, likedBy: uid })
    }

    /**
     * Removes like instance into the database
     * @param {string} uid Primary key of user
     * @param {string} tid Primary key of tuit
     * @returns Promise To be notified when like is removed from the database
     */
    async userUnlikesTuit(uid: string, tid: string): Promise<any> {
        return await LikeModel.deleteOne({ likedBy: uid, tuit: tid })
    }

    /**
     * Uses LikeModel to retrieve all like documents where tuit is liked 
     * by this user from likes collection
     * @param {string} uid User's primary key
     * @returns Promise To be notified when likes are retrieved from the database
     */
    async findAllTuitsLikedByUser(uid: string): Promise<Like[]> {
        return await LikeModel.find({ likedBy: uid }).populate("tuit")
    }

    /**
     * Uses LikeModel to retrieve all like documents where tuit is liked 
     * by this user from likes collection
     * @param {string} tid Tuit's primary key
     * @returns Promise To be notified when likes are retrieved from the database
     */
    async findAllUsersThatLikedTuit(tid: string): Promise<Like[]> {
        return await LikeModel.find({ tuit: tid }).populate("likedBy")
    }
}
