import ActorsService from "./actors-service";
import {Express, Request, Response} from "express";

export default class ActorController {
    private service: ActorsService;

    findAllActors = async (req: Request, res: Response) => {
        const actors = await this.service.findAllActors();
        res.json(actors);
    }

    findActorById = async (req: Request, res: Response) => {
        const aid = req.params['aid'];
        const actor = await this.service.findActorById(aid);
        res.json(actor);
    }

    createActor = async (req: Request, res: Response) => {
        const newActor = req.body;
        const insertedActor = await this.service.createActor(newActor);
        res.json(insertedActor);
    }

    deleteActor = async (req: Request, res: Response) => {
        const aid = req.params.aid;
        const count = await this.service.deleteActor(aid);
        res.json({deleted: count});
    }

    updateActor = async (req: Request, res: Response) => {
        const aid = req.params['aid'];
        const newActor = req.body;
        const count = await this.service.updateActor(aid, newActor);
        res.json({updated: count});
    }

    constructor(app: Express, service: ActorsService) {
        this.service = service;
        app.get('/api/actors', this.findAllActors);
        app.get('/api/actors/:aid', this.findActorById);
        app.post('/api/actors', this.createActor);
        app.delete('/api/actors/:aid', this.deleteActor);
        app.put('/api/actors/:aid', this.updateActor);
    }
}
