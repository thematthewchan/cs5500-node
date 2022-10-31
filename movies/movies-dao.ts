import moviesModel from "./movies-model";

export const findAllMovies = () =>
    moviesModel.find();

export const findMovieByTitle = (title: string) =>
    moviesModel.findOne({title});
    //moviesModel.findOne({title: title});

export const findMoviesByDirector = (director: string) =>
    moviesModel.find({director});

export const findMovieById = (mid: string) =>
    moviesModel.findById(mid);

export const createMovie = (movie: any) =>
    moviesModel.create(movie);

export const deleteMovie = (mid: string) =>
    moviesModel.deleteOne({_id: mid});

export const updateMovie = (mid: string, newMovie: any) =>
    moviesModel.updateOne(
        {_id: mid},
        {$set: newMovie}
    );
