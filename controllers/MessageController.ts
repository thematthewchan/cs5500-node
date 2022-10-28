import { Request, Response, Express } from "express";
import MessageDao from "../daos/MessageDao";
import MessageControllerI from "../interfaces/MessageControllerI";

export default class MessageController implements MessageControllerI {
    app: Express;
    messageDao: MessageDao;
    constructor(app: Express, messageDao: MessageDao) {
        this.app = app;
        this.messageDao = messageDao;
        this.app.get("/users/:uid/messages", this.findAllReceivedMessages);
        this.app.get("/users/:uid/messages/sent", this.findAllSentMessages);
        this.app.post("/users/:uidFrom/messages/:uidTo", this.sendMessage);
        this.app.delete("/users/:uidFrom/messages/:uidTo", this.deleteMessage);
    }
    findAllReceivedMessages = (req: Request, res: Response) =>
        this.messageDao.findAllReceivedMessages(req.params.uid)
            .then(messages => res.json(messages));
    findAllSentMessages = (req: Request, res: Response) =>
        this.messageDao.findAllSentMessages(req.params.uid)
            .then(messages => res.json(messages));
    sendMessage = (req: Request, res: Response) =>
        this.messageDao.sendMessage(req.params.uidFrom, req.params.uidTo, req.body.message)
            .then(messages => res.json(messages));
    deleteMessage = (req: Request, res: Response) =>
        this.messageDao.deleteMessage(req.params.uidFrom, req.params.uidTo, req.body.message)
            .then(status => res.json(status));
}
