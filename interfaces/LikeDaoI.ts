import Like from "../models/Like";

export default interface LikeDaoI {
    userLikesTuit(uid: string, tid: string): Promise<Like>;
    userUnlikesTuit(uid: string, tid: string): Promise<any>;
    findAllTuitsLikedByUser(uid: string): Promise<Like[]>
    findAllUsersThatLikedTuit(tid: string): Promise<Like[]>
}
