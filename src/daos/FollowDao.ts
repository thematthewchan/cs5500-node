/**
 * @file Implements DAO managing data storage of follows. Uses mongoose FollowModel
 * to integrate with MongoDB
 */
import FollowDaoI from "../interfaces/FollowDaoI";
import FollowModel from "../mongoose/FollowModel";
import Follow from "../models/Follow";

/**
 * @class FollowDao Implements Data Access Object managing data storage
 * of Follows
 */
export default class FollowDao implements FollowDaoI {
    private static followDao: FollowDao | null = null
    public static getInstance = (): FollowDao => {
        if (FollowDao.followDao === null) {
            FollowDao.followDao = new FollowDao()
        }
        return FollowDao.followDao
    }

    /**
     * Inserts follow instance into the database
     * @param {string} uidFollowed Primary key of user being followed
     * @param {string} uidFollowing Primary key of user following
     * @returns Promise To be notified when follow is inserted into the database
     */
    async userFollowsUser(uidFollowed: string, uidFollowing: string): Promise<any> {
        return await FollowModel.create({ userFollowed: uidFollowed, userFollowing: uidFollowing })
    }

    /**
     * Removes follow instance into the database
     * @param {string} uidFollowed Primary key of user being unfollowed
     * @param {string} uidFollowing Primary key of user unfollowing
     * @returns Promise To be notified when follow is removed from the database
     */
    async userUnfollowsUser(uidFollowed: string, uidFollowing: string): Promise<any> {
        return await FollowModel.deleteOne({ userFollowed: uidFollowed, userFollowing: uidFollowing })
    }

    /**
     * Uses FollowModel to retrieve all follow documents of user following from follows collection
     * @param {string} uid User's primary key
     * @returns Promise To be notified when follows are retrieved from the database
     */
    async findAllFollowing(uid: string): Promise<Follow[]> {
        return await FollowModel.find({ userFollowing: uid }).populate("userFollowing")
    }

    /**
     * Uses FollowModel to retrieve all follow documents of user being followed from follows collection
     * @param {string} uid User's primary key
     * @returns Promise To be notified when follows are retrieved from the database
     */
    async findAllFollowers(uid: string): Promise<Follow[]> {
        return await FollowModel.find({ userFollowed: uid }).populate("userFollowed")
    }
}
