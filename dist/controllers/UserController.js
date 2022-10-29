"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @class UserController Implements RESTful Web service API for users resource.
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>POST /api/users to create a new user instance</li>
 *     <li>GET /api/users to retrieve all the user instances</li>
 *     <li>GET /api/users/:uid to retrieve an individual user instance </li>
 *     <li>PUT /api/users to modify an individual user instance </li>
 *     <li>DELETE /api/users/:uid to remove a particular user instance</li>
 * </ul>
 * @property {UserDao} userDao Singleton DAO implementing user CRUD operations
 * @property {UserController} userController Singleton controller implementing
 * RESTful Web service API
 */
class UserController {
    constructor(app, userDao) {
        /**
         * Retrieves all users from the database and returns an array of users.
         * @param {Request} req Represents request from client
         * @param {Response} res Represents response to client, including the
         * body formatted as JSON arrays containing the user objects
         */
        this.findAllUsers = (req, res) => this.userDao.findAllUsers()
            .then(users => res.json(users));
        /**
         * Retrieves the user by their primary key
         * @param {Request} req Represents request from client, including path
         * parameter uid identifying the primary key of the user to be retrieved
         * @param {Response} res Represents response to client, including the
         * body formatted as JSON containing the user that matches the user ID
         */
        this.findUserById = (req, res) => this.userDao.findUserById(req.params.uid)
            .then(user => res.json(user));
        /**
         * Creates a new user instance
         * @param {Request} req Represents request from client, including body
         * containing the JSON object for the new user to be inserted in the
         * database
         * @param {Response} res Represents response to client, including the
         * body formatted as JSON containing the new user that was inserted in the
         * database
         */
        this.createUser = (req, res) => this.userDao.createUser(req.body)
            .then(user => res.json(user));
        /**
         * Removes a user instance from the database
         * @param {Request} req Represents request from client, including path
         * parameter uid identifying the primary key of the user to be removed
         * @param {Response} res Represents response to client, including status
         * on whether deleting a user was successful or not
         */
        this.deleteUser = (req, res) => this.userDao.deleteUser(req.params.uid)
            .then(status => res.json(status));
        /**
         * Modifies an existing user instance
         * @param {Request} req Represents request from client, including path
         * parameter uid identifying the primary key of the user to be modified
         * @param {Response} res Represents response to client, including status
         * on whether updating a user was successful or not
         */
        this.updateUser = (req, res) => this.userDao.updateUser(req.params.uid, req.body)
            .then(status => res.json(status));
        this.app = app;
        this.userDao = userDao;
        this.app.get('/users', this.findAllUsers);
        this.app.get('/users/:uid', this.findUserById);
        this.app.post('/users', this.createUser);
        this.app.delete('/users/:uid', this.deleteUser);
        this.app.put('/users/:uid', this.updateUser);
    }
}
exports.default = UserController;
//# sourceMappingURL=UserController.js.map