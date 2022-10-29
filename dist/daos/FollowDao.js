"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FollowModel_1 = __importDefault(require("../mongoose/FollowModel"));
/**
 * @class FollowDao Implements Data Access Object managing data storage
 * of Follows
 */
class FollowDao {
    /**
     * Inserts follow instance into the database
     * @param {string} uidFollowed Primary key of user being followed
     * @param {string} uidFollowing Primary key of user following
     * @returns Promise To be notified when follow is inserted into the database
     */
    userFollowsUser(uidFollowed, uidFollowing) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield FollowModel_1.default.create({ userFollowed: uidFollowed, userFollowing: uidFollowing });
        });
    }
    /**
     * Removes follow instance into the database
     * @param {string} uidFollowed Primary key of user being unfollowed
     * @param {string} uidFollowing Primary key of user unfollowing
     * @returns Promise To be notified when follow is removed from the database
     */
    userUnfollowsUser(uidFollowed, uidFollowing) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield FollowModel_1.default.deleteOne({ userFollowed: uidFollowed, userFollowing: uidFollowing });
        });
    }
    /**
     * Uses FollowModel to retrieve all follow documents of user following from follows collection
     * @param {string} uid User's primary key
     * @returns Promise To be notified when follows are retrieved from the database
     */
    findAllFollowing(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield FollowModel_1.default.find({ userFollowing: uid }).populate("userFollowing");
        });
    }
    /**
     * Uses FollowModel to retrieve all follow documents of user being followed from follows collection
     * @param {string} uid User's primary key
     * @returns Promise To be notified when follows are retrieved from the database
     */
    findAllFollowers(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield FollowModel_1.default.find({ userFollowed: uid }).populate("userFollowed");
        });
    }
}
exports.default = FollowDao;
FollowDao.followDao = null;
FollowDao.getInstance = () => {
    if (FollowDao.followDao === null) {
        FollowDao.followDao = new FollowDao();
    }
    return FollowDao.followDao;
};
//# sourceMappingURL=FollowDao.js.map