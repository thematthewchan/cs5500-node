import {Request, Response, Express} from "express";
import LikeDao from "../daos/LikeDao";
import LikeControllerI from "../interfaces/LikeControllerI";

export default class LikeController implements LikeControllerI {
    app: Express;
    likeDao: LikeDao;
    constructor(app: Express, likeDao: LikeDao) {
      this.app = app;
      this.likeDao = likeDao;
      this.app.get("/users/:uid/likes", this.findAllTuitsLikedByUser);
      this.app.get("/tuits/:tid/likes", this.findAllUsersThatLikedTuit);
      this.app.post("/users/:uid/likes/:tid", this.userLikesTuit);
      this.app.delete("/users/:uid/likes/:tid", this.userUnlikesTuit);
    }
    findAllTuitsLikedByUser = (req: Request, res: Response) =>
        this.likeDao.findAllTuitsLikedByUser(req.params.uid)
        .then(likes => res.json(likes));
    findAllUsersThatLikedTuit = (req: Request, res: Response) =>
        this.likeDao.findAllUsersThatLikedTuit(req.params.tid)
        .then(likes => res.json(likes));
    userLikesTuit = (req: Request, res: Response) =>
        this.likeDao.userLikesTuit(req.params.uid, req.params.tid)
        .then(likes => res.json(likes));
    userUnlikesTuit = (req: Request, res: Response) =>
        this.likeDao.userUnlikesTuit(req.params.uid, req.params.tid)
        .then(status => res.json(status));
  }
  