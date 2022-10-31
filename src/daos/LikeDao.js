var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import LikeModel from "../mongoose/LikeModel";
/**
 * @class LikeDao Implements Data Access Object managing data storage
 * of Likes
 */
export default class LikeDao {
    /**
     * Inserts like instance into the database
     * @param {string} uid Primary key of user
     * @param {string} tid Primary key of tuit
     * @returns Promise To be notified when like is inserted into the database
     */
    userLikesTuit(uid, tid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield LikeModel.create({ tuit: tid, likedBy: uid });
        });
    }
    /**
     * Removes like instance into the database
     * @param {string} uid Primary key of user
     * @param {string} tid Primary key of tuit
     * @returns Promise To be notified when like is removed from the database
     */
    userUnlikesTuit(uid, tid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield LikeModel.deleteOne({ likedBy: uid, tuit: tid });
        });
    }
    /**
     * Uses LikeModel to retrieve all like documents where tuit is liked
     * by this user from likes collection
     * @param {string} uid User's primary key
     * @returns Promise To be notified when likes are retrieved from the database
     */
    findAllTuitsLikedByUser(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield LikeModel.find({ likedBy: uid }).populate("tuit");
        });
    }
    /**
     * Uses LikeModel to retrieve all like documents where tuit is liked
     * by this user from likes collection
     * @param {string} tid Tuit's primary key
     * @returns Promise To be notified when likes are retrieved from the database
     */
    findAllUsersThatLikedTuit(tid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield LikeModel.find({ tuit: tid }).populate("likedBy");
        });
    }
}
LikeDao.likeDao = null;
LikeDao.getInstance = () => {
    if (LikeDao.likeDao === null) {
        LikeDao.likeDao = new LikeDao();
    }
    return LikeDao.likeDao;
};
