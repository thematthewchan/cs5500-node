import {Request, Response, Express} from "express";
import FollowDao from "../daos/FollowDao";
import FollowControllerI from "../interfaces/FollowControllerI";

export default class FollowController implements FollowControllerI {
    app: Express;
    followDao: FollowDao;
    constructor(app: Express, followDao: FollowDao) {
      this.app = app;
      this.followDao = followDao;
      this.app.get("/users/:uid/follows", this.findAllFollowing);
      this.app.get("/users/:uid/followers", this.findAllFollowers);
      this.app.post("/users/:uidFollowing/follows/:uidFollowed", this.userFollowsUser);
      this.app.delete("/users/:uidFollowing/follows/:uidFollowed", this.userUnfollowsUser);
    }
    userFollowsUser = (req: Request, res: Response) =>
        this.followDao.userFollowsUser(req.params.uidFollowed, req.params.uidFollowing)
        .then(follows => res.json(follows));
    userUnfollowsUser = (req: Request, res: Response) =>
        this.followDao.userUnfollowsUser(req.params.uidFollowed, req.params.uidFollowing)
        .then(follows => res.json(follows));
    findAllFollowing = (req: Request, res: Response) =>
        this.followDao.findAllFollowing(req.params.uid)
        .then(follows => res.json(follows));
    findAllFollowers = (req: Request, res: Response) =>
        this.followDao.findAllFollowers(req.params.uid)
        .then(status => res.json(status));
  }
  