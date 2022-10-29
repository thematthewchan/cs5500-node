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
const BookmarkModel_1 = __importDefault(require("../mongoose/BookmarkModel"));
/**
 * @class BookmarkDao Implements Data Access Object managing data storage
 * of Bookmarks
 */
class BookmarkDao {
    /**
     * Inserts bookmark instance into the database
     * @param {string} uid Primary key of user bookmarking tuit
     * @param {string} tid Primary key of tuit being bookmarked
     * @returns Promise To be notified when bookmark is inserted into the database
     */
    userBookmarksTuit(uid, tid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield BookmarkModel_1.default.create({ bookmarkedTuit: tid, bookmarkedBy: uid });
        });
    }
    /**
     * Removes bookmark from the database.
     * @param {string} uid Primary key of user unbookmarking tuit
     * @param {string} tid Primary key of tuit being unbookmarked
     * @returns Promise To be notified when tuit is removed from the database
     */
    userUnbookmarksTuit(uid, tid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield BookmarkModel_1.default.deleteOne({ bookmarkedBy: uid, tuit: tid });
        });
    }
    /**
     * Uses BookmarkModel to retrieve single bookmark document from bookmarks collection
     * @param {string} uid User's primary key
     * @returns Promise To be notified when bookmarks are retrieved from the database
     */
    findAllTuitsBookmarkedByUser(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield BookmarkModel_1.default.find({ likedBy: uid }).populate("bookmarkedTuit");
        });
    }
    /**
    * Uses BookmarkModel to retrieve all bookmark documents from bookmarks collection
    * @param {string} tid Tuit's primary key
    * @returns Promise To be notified when the bookmarks are retrieved from
    * database
    */
    findAllUsersThatBookmarkedTuit(tid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield BookmarkModel_1.default.find({ bookmarkedTuit: tid }).populate("bookmarkedBy");
        });
    }
}
exports.default = BookmarkDao;
BookmarkDao.bookmarkDao = null;
BookmarkDao.getInstance = () => {
    if (BookmarkDao.bookmarkDao === null) {
        BookmarkDao.bookmarkDao = new BookmarkDao();
    }
    return BookmarkDao.bookmarkDao;
};
//# sourceMappingURL=BookmarkDao.js.map