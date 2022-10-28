import BookmarkDaoI from "../interfaces/BookmarkDaoI";
import Bookmark from "../models/Bookmark";
import BookmarkModel from "../mongoose/BookmarkModel";

export default class BookmarkDao implements BookmarkDaoI {
    private static bookmarkDao: BookmarkDao | null = null
    public static getInstance = (): BookmarkDao => {
      if (BookmarkDao.bookmarkDao === null) {
        BookmarkDao.bookmarkDao = new BookmarkDao()
      }
      return BookmarkDao.bookmarkDao
    }

    async userBookmarksTuit(uid: string, tid: string): Promise<Bookmark> {
        return await BookmarkModel.create({bookmarkedTuit: tid, bookmarkedBy: uid})
    }
    async userUnbookmarksTuit(uid: string, tid: string): Promise<any> {
        return await BookmarkModel.deleteOne({bookmarkedBy: uid, tuit: tid})
    }
    async findAllTuitsBookmarkedByUser(uid: string): Promise<Bookmark[]> {
        return await BookmarkModel.find({likedBy: uid}).populate("bookmarkedTuit")
    }
    async findAllUsersThatBookmarkedTuit(tid: string): Promise<Bookmark[]> {
        return await BookmarkModel.find({bookmarkedTuit: tid}).populate("bookmarkedBy")
    }
}