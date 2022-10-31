import castingsModel from "./castings-model";

export const findActorsInMovie = (mid: string) =>
    castingsModel.find({movie: mid}, {actor: 1, _id: 0})
        .populate('actor')
        .exec();

export const findMoviesForActor = (aid: string) => {
    return castingsModel
        .find(
            {actor: aid}, {movie: 1, _id: 0})
        .populate('movie')
        .exec();
}

export const addActorToMovie = (actor: string, movie: string) =>
    castingsModel.create({actor, movie});

export const addMovieToActor = (movie: string, actor: string) =>
    castingsModel.create({actor, movie});

export const removeActorFromMovie = (actor: string, movie: string) =>
    castingsModel.deleteOne({actor, movie});

export const removeMovieFromActor = (movie: string, actor: string) =>
    castingsModel.deleteOne({actor, movie});

