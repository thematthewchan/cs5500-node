/**
 * @class BookmarkController Implements RESTful Web service API for bookmarks resource.
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>GET /users/:uid/bookmarks to retrieve all the tuits bookmarked by a user
 *     </li>
 *     <li>GET /tuits/:tid/bookmarks to retrieve all users that bookmarked a tuit
 *     </li>
 *     <li>POST /users/:uid/bookmarks/:tid to record that a user bookmarked a tuit
 *     </li>
 *     <li>DELETE /users/:uid/bookmarks/:tid to record that a user
 *     no londer bookmarked a tuit</li>
 * </ul>
 * @property {BookmarkDao} bookmarkDao Singleton DAO implementing bookmarks CRUD operations
 * @property {Express} app Express app
 * RESTful Web service API
 */
export default class BookmarkController {
    constructor(app, bookmarkDao) {
        /**
         * Retrieves all tuits that bookmarked by a user from the database
         * @param req represents request from client, including path parameter tid
         * representing the bookmarked tuit
         * @param res Represents response to client, including the body formatted
         * as JSON arrays containing the user objects
         */
        this.findAllTuitsBookmarkedByUser = (req, res) => this.bookmarkDao.findAllTuitsBookmarkedByUser(req.params.uid)
            .then(likes => res.json(likes));
        /**
         * Retrieves all users that bookmarked a tuit from the database
         * @param req represents request from client, including path parameter tid
         *  representing the bookmarked tuit
         * @param res Represents response to client, including the body formatted
         * as JSON arrays containing the user objects
         */
        this.findAllUsersThatBookmarkedTuit = (req, res) => this.bookmarkDao.findAllUsersThatBookmarkedTuit(req.params.tid)
            .then(likes => res.json(likes));
        /**
         * @param req represents request from client, including the path parameters
         * uid and tid representing the user that is bookmarking the tuit and the
         *  tuit being bookmarked
         * @param res Represents response to client, including the
         * body formatted as JSON containing the new bookmark that was inserted in the
         * database
         */
        this.userBookmarksTuit = (req, res) => this.bookmarkDao.userBookmarksTuit(req.params.uid, req.params.tid)
            .then(likes => res.json(likes));
        /**
         * @param req represents request from client, including the path parameters
         * uid and tid representing the user that is unbookmarking the tuit and the
         * tuit being unbookmarked
         * @param res Represents response to client, including the
         * status on whether deleting the bookmark was successful or not
         */
        this.userUnbookmarksTuit = (req, res) => this.bookmarkDao.userUnbookmarksTuit(req.params.uid, req.params.tid)
            .then(status => res.json(status));
        this.app = app;
        this.bookmarkDao = bookmarkDao;
        this.app.get("/users/:uid/bookmarks", this.findAllTuitsBookmarkedByUser);
        this.app.get("/tuits/:tid/bookmarks", this.findAllUsersThatBookmarkedTuit);
        this.app.post("/users/:uid/bookmarks/:tid", this.userBookmarksTuit);
        this.app.delete("/users/:uid/bookmarks/:tid", this.userUnbookmarksTuit);
    }
}
