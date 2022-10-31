import ActorsDaoInterface from "../actors/actors-dao-interface";
import ActorsDao from "../actors/actors-dao";
import Actor from "../actors/actor";

export default class ActorsService {
    private dao: ActorsDaoInterface;
    constructor(dao: ActorsDao) {
        this.dao = dao;
    }
    findAllActors = async () => await this.dao.findAllActors();
    findActorById = async (aid: string) => await this.dao.findActorById(aid);
    createActor = async (actor: Actor) => await this.dao.createActor(actor);
    deleteActor = async (aid: string) => await this.dao.deleteActor(aid);
    updateActor = async (aid: string, actor: Actor) => await this.dao.updateActor(aid, actor);
}

