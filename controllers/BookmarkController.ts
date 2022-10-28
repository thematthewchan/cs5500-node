import {Request, Response, Express} from "express";
import BookmarkDao from "../daos/BookmarkDao";
import BookmarkControllerI from "../interfaces/BookmarkControllerI";

export default class BookmarkController implements BookmarkControllerI {
    app: Express;
    bookmarkDao: BookmarkDao;
    constructor(app: Express, bookmarkDao: BookmarkDao) {
      this.app = app;
      this.bookmarkDao = bookmarkDao;
      this.app.get("/users/:uid/bookmarks", this.findAllTuitsBookmarkedByUser);
      this.app.get("/tuits/:tid/bookmarks", this.findAllUsersThatBookmarkedTuit);
      this.app.post("/users/:uid/bookmarks/:tid", this.userBookmarksTuit);
      this.app.delete("/users/:uid/bookmarks/:tid", this.userUnbookmarksTuit);
    }
    findAllTuitsBookmarkedByUser = (req: Request, res: Response) =>
        this.bookmarkDao.findAllTuitsBookmarkedByUser(req.params.uid)
        .then(likes => res.json(likes));
    findAllUsersThatBookmarkedTuit = (req: Request, res: Response) =>
        this.bookmarkDao.findAllUsersThatBookmarkedTuit(req.params.tid)
        .then(likes => res.json(likes));
    userBookmarksTuit = (req: Request, res: Response) =>
        this.bookmarkDao.userBookmarksTuit(req.params.uid, req.params.tid)
        .then(likes => res.json(likes));
    userUnbookmarksTuit = (req: Request, res: Response) =>
        this.bookmarkDao.userUnbookmarksTuit(req.params.uid, req.params.tid)
        .then(status => res.json(status));
  }
  