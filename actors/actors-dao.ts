import ActorsDaoInterface from "./actors-dao-interface";
import Actor from "./actor";
import actorsModel from "./actors-model";

export default class ActorsDao implements ActorsDaoInterface {
    async createActor(actor: Actor): Promise<Actor> {
        const a = await actorsModel.create(actor);
        return new Actor(
            a._id.toString()||'',
            a.firstName||'',
            a.lastName||''
        );
    }

    async deleteActor(actorId: string): Promise<number> {
        const result = await actorsModel.deleteOne({_id: actorId});
        return result.deletedCount;
    }

    async findActorById(actorId: string): Promise<Actor> {
        const a = await actorsModel.findById(actorId);
        return new Actor(
            a?._id.toString()||'',
            a?.firstName??'',
            a?.lastName??''
        );
    }

    async findAllActors(): Promise<Actor[]> {
        const allActorModels = await actorsModel.find();
        return allActorModels.map(actorModel =>
            new Actor(
                actorModel?._id.toString()??'',
                actorModel?.firstName??'',
                actorModel?.lastName??''
            )
        )
    }

    async updateActor(actorId: string, actor: Actor): Promise<number> {
        const result = await actorsModel.updateOne(
            {_id: actorId},
            {$set: actor}
        );
        return result.upsertedCount;
    }
}