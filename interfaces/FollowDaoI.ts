import Follow from "../models/Follow";

export default interface FollowDaoI {
    userFollowsUser(uidFollowed: string, uidFollowing: string): Promise<Follow>;
    userUnfollowsUser(uidFollowed: string, uidFollowing: string): Promise<any>;
    findAllFollowing(uid: string): Promise<Follow[]>
    findAllFollowers(uid: string): Promise<Follow[]>
}
