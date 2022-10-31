/**
 * @class MessageController Implements RESTful Web service API for messages resource.
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>GET /users/:uid/messages to retrieve all the messages sent to this user
 *     </li>
 *     <li>GET /tuits/:uid/messages/sent to retrieve all messages sent from this user
 *     </li>
 *     <li>POST /users/:uidFrom/messages/:uidTo to record that a user messaged a user
 *     </li>
 *     <li>DELETE /users/:uidFrom/messages/:uidTo to record that a user deleted a message
 *     </li>
 * </ul>
 * @property {MessageDao} messageDao Singleton DAO implementing messages CRUD operations
 * @property {Express} app Express app
 * RESTful Web service API
 */
export default class MessageController {
    constructor(app, messageDao) {
        /**
         * Retrieves all messages that received by a user from the database
         * @param req represents request from client, including path parameter uid
         * representing the user messages have been sent to
         * @param res Represents response to client, including the body formatted
         * as JSON arrays containing the message objects
         */
        this.findAllReceivedMessages = (req, res) => this.messageDao.findAllReceivedMessages(req.params.uid)
            .then(messages => res.json(messages));
        /**
         * Retrieves all messages that the user has sent from the database
         * @param req represents request from client, including path parameter uid
         *  representing the user who sent the messages
         * @param res Represents response to client, including the body formatted
         * as JSON arrays containing the message objects
         */
        this.findAllSentMessages = (req, res) => this.messageDao.findAllSentMessages(req.params.uid)
            .then(messages => res.json(messages));
        /**
         * @param req represents request from client, including the path parameters
         * uidFrom and uidTo and the message representing the user that is sending the
         * message and the user the message is being sent to as well as the message itself
         * @param res Represents response to client, including the
         * body formatted as JSON containing the new message that was inserted in the
         * database
         */
        this.sendMessage = (req, res) => this.messageDao.sendMessage(req.params.uidFrom, req.params.uidTo, req.body.message)
            .then(messages => res.json(messages));
        /**
         * @param req represents request from client, including the path parameters
         * uidFrom and uidTo and the message representing deleted message
         * @param res Represents response to client, including the
         * status on whether deleting the message was successful or not
         */
        this.deleteMessage = (req, res) => this.messageDao.deleteMessage(req.params.uidFrom, req.params.uidTo, req.body.message)
            .then(status => res.json(status));
        this.app = app;
        this.messageDao = messageDao;
        this.app.get("/users/:uid/messages", this.findAllReceivedMessages);
        this.app.get("/users/:uid/messages/sent", this.findAllSentMessages);
        this.app.post("/users/:uidFrom/messages/:uidTo", this.sendMessage);
        this.app.delete("/users/:uidFrom/messages/:uidTo", this.deleteMessage);
    }
}
