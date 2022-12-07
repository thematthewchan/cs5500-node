/**
 * @file like dao interface for implementing CRUD operations
 */
import DisLike from "../models/Dislike";

/**
 * @interface DislikeDao interface
 */

export default interface DislikeDao {
    /**
     * Create a dislike for a tuit
     * @param {string} uid user id
     * @param {string} tid tuit id
     * @returns like
     */
    userDislikesTuit(tid: string, uid: string): Promise<any>;
    /**
     * Delete dislikes for a tuit
     * @param {string} uid user id
     * @param {string} tid tuit id
     * @returns delete status
     */
    userUnDislikesTuit(tid: string, uid: string): Promise<DisLike>;

    /**
     * Find a disliked tuit that matches tuit id and user id.
     * @param {string} uid user id
     * @param {string} tid tuit id
     */
    findUserDislikesTuit(uid: string, tid: string): Promise<DisLike>;

    /**
     * Count how many dislike there is for a tuit
     * @param tid tuit id
     */
    countHowManyDislikedTuit(tid: string): Promise<number>;
}