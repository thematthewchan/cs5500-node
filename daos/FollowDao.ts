import FollowDaoI from "../interfaces/FollowDaoI";
import FollowModel from "../mongoose/FollowModel";
import Follow from "../models/Follow";

export default class FollowDao implements FollowDaoI {

    private static followDao: FollowDao | null = null
    public static getInstance = (): FollowDao => {
      if (FollowDao.followDao === null) {
        FollowDao.followDao = new FollowDao()
      }
      return FollowDao.followDao
    }

    async userFollowsUser(uidFollowed: string, uidFollowing: string): Promise<Follow> {
        return await FollowModel.create({userFollowed: uidFollowed, userFollowing: uidFollowing})
    }
    async userUnfollowsUser(uidFollowed: string, uidFollowing: string): Promise<any> {
        return await FollowModel.deleteOne({userFollowed: uidFollowed, userFollowing: uidFollowing})
    }
    async findAllFollowing(uid: string): Promise<Follow[]> {
        return await FollowModel.find({userFollowing: uid}).populate("userFollowing")
    }
    async findAllFollowers(uid: string): Promise<Follow[]> {
        return await FollowModel.find({userFollowed: uid}).populate("userFollowed")
    }
}
