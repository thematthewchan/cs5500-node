/**
 * @file Declares API for Like related data access object methods
 */
import { Request, Response } from "express";

export default interface LikeControllerI {
  userLikesTuit(req: Request, res: Response): void;
  userUnlikesTuit(req: Request, res: Response): void;
  userTogglesTuitLikes(req: Request, res: Response): void;
  countHowManyLikedTuit(req: Request, res: Response): void;
  findUserLikesTuit(req: Request, res: Response): void;
  findAllTuitsLikedByUser(req: Request, res: Response): void;
  findAllUsersThatLikedTuit(req: Request, res: Response): void;
}
