/**
 * @file Implements DAO managing data storage of bookmarks. Uses mongoose BookmarkModel
 * to integrate with MongoDB
 */
import BookmarkDaoI from "../interfaces/BookmarkDaoI";
import Bookmark from "../models/Bookmark";
import BookmarkModel from "../mongoose/BookmarkModel";

/**
 * @class BookmarkDao Implements Data Access Object managing data storage
 * of Bookmarks
 */
export default class BookmarkDao implements BookmarkDaoI {
    private static bookmarkDao: BookmarkDao | null = null
    public static getInstance = (): BookmarkDao => {
        if (BookmarkDao.bookmarkDao === null) {
            BookmarkDao.bookmarkDao = new BookmarkDao()
        }
        return BookmarkDao.bookmarkDao
    }

    /**
     * Inserts bookmark instance into the database
     * @param {string} uid Primary key of user bookmarking tuit
     * @param {string} tid Primary key of tuit being bookmarked
     * @returns Promise To be notified when bookmark is inserted into the database
     */
    async userBookmarksTuit(uid: string, tid: string): Promise<any> {
        return await BookmarkModel.create({ bookmarkedTuit: tid, bookmarkedBy: uid })
    }

    /**
     * Removes bookmark from the database.
     * @param {string} uid Primary key of user unbookmarking tuit
     * @param {string} tid Primary key of tuit being unbookmarked
     * @returns Promise To be notified when tuit is removed from the database
     */
    async userUnbookmarksTuit(uid: string, tid: string): Promise<any> {
        return await BookmarkModel.deleteOne({ bookmarkedBy: uid, tuit: tid })
    }

    /**
     * Uses BookmarkModel to retrieve single bookmark document from bookmarks collection
     * @param {string} uid User's primary key
     * @returns Promise To be notified when bookmarks are retrieved from the database
     */
    async findAllTuitsBookmarkedByUser(uid: string): Promise<Bookmark[]> {
        return await BookmarkModel.find({ likedBy: uid }).populate("bookmarkedTuit")
    }

    /**
    * Uses BookmarkModel to retrieve all bookmark documents from bookmarks collection
    * @param {string} tid Tuit's primary key
    * @returns Promise To be notified when the bookmarks are retrieved from
    * database
    */
    async findAllUsersThatBookmarkedTuit(tid: string): Promise<Bookmark[]> {
        return await BookmarkModel.find({ bookmarkedTuit: tid }).populate("bookmarkedBy")
    }
}
