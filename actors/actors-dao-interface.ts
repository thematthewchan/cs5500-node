import Actor from "./actor";
interface ActorsDaoInterface {
    findAllActors() : Promise<Actor[]>
    findActorById(actorId: string) : Promise<Actor>
    createActor(actor: Actor): Promise<Actor>
    deleteActor(actorId: string): Promise<number>
    updateActor(actorId: string, actor: Actor): Promise<number>
}
export default ActorsDaoInterface;