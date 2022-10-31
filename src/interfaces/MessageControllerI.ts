/**
 * @file Declares API for Message related data access object methods
 */
import { Request, Response } from "express";

export default interface MessageControllerI {
    findAllReceivedMessages(req: Request, res: Response): void;
    findAllSentMessages(req: Request, res: Response): void;
    sendMessage(req: Request, res: Response): void;
    deleteMessage(req: Request, res: Response): void;
}
