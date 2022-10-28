import Like from "../models/Like";
import LikeModel from "../mongoose/LikeModel";
import LikeDaoI from "../interfaces/LikeDaoI";

export default class LikeDao implements LikeDaoI {
    private static likeDao: LikeDao | null = null
    public static getInstance = (): LikeDao => {
        if (LikeDao.likeDao === null) {
            LikeDao.likeDao = new LikeDao()
        }
        return LikeDao.likeDao
    }

    async userLikesTuit(uid: string, tid: string): Promise<Like> {
        return await LikeModel.create({ tuit: tid, likedBy: uid })
    }
    async userUnlikesTuit(uid: string, tid: string): Promise<any> {
        return await LikeModel.deleteOne({ likedBy: uid, tuit: tid })
    }
    async findAllTuitsLikedByUser(uid: string): Promise<Like[]> {
        return await LikeModel.find({ likedBy: uid }).populate("tuit")
    }
    async findAllUsersThatLikedTuit(tid: string): Promise<Like[]> {
        return await LikeModel.find({ tuit: tid }).populate("likedBy")
    }
}
