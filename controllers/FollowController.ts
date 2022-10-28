/**
 * @file Controller RESTful Web service API for Follow resource
 */
import { Request, Response, Express } from "express";
import FollowDao from "../daos/FollowDao";
import FollowControllerI from "../interfaces/FollowControllerI";

/**
 * @class FollowController Implements RESTful Web service API for follow resource.
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>GET /users/:uid/follows to retrieve all users they are following
 *     </li>
 *     <li>GET /tuits/:tid/followers to retrieve all users that follow them
 *     </li>
 *     <li>POST /users/:uidFollowing/follows/:uidFollowed to record that a user followed a user
 *     </li>
 *     <li>DELETE /users/:uidFollowing/follows/:uidFollowed to record that a user unfollowed a user
 *     </li>
 * </ul>
 * @property {FollowDao} followDao Singleton DAO implementing follow CRUD operations
 * @property {Express} app Express app
 * RESTful Web service API
 */
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

    /**
     * @param req represents request from client, including the path parameters 
     * uidFollowed and uidFollowing representing the user that is being followed
     * and the user following
     * @param res Represents response to client, including the
     * body formatted as JSON containing the new follow that was inserted in the
     * database
     */
    userFollowsUser = (req: Request, res: Response) =>
        this.followDao.userFollowsUser(req.params.uidFollowed, req.params.uidFollowing)
            .then(follows => res.json(follows));

    /**
     * @param req represents request from client, including the path parameters 
     * uidFollowed and uidFollowing representing the user that is being unfollowed
     * and the user following
     * @param res Represents response to client, including the
     * status on whether deleting the follow was successful or not
     */
    userUnfollowsUser = (req: Request, res: Response) =>
        this.followDao.userUnfollowsUser(req.params.uidFollowed, req.params.uidFollowing)
            .then(follows => res.json(follows));

    /**
     * Retrieves all users that this user is following from the database
     * @param req represents request from client, including path parameter uid 
     * representing the user
     * @param res Represents response to client, including the body formatted 
     * as JSON arrays containing the user objects
     */
    findAllFollowing = (req: Request, res: Response) =>
        this.followDao.findAllFollowing(req.params.uid)
            .then(follows => res.json(follows));

    /**
     * Retrieves all users that follow this user from the database
     * @param req represents request from client, including path parameter uid 
     * representing the user
     * @param res Represents response to client, including the body formatted 
     * as JSON arrays containing the user objects
     */
    findAllFollowers = (req: Request, res: Response) =>
        this.followDao.findAllFollowers(req.params.uid)
            .then(status => res.json(status));
}
