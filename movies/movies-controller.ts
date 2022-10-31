import {Express, Request, Response} from "express";
import * as movieDao from './movies-dao';
import {deleteMovie} from "./movies-dao";
class MoviesController {

    findAllMovies(req: Request, res: Response) {
        movieDao.findAllMovies()
            .then(movies => res.send(movies))
    }

    findMovieById(req: Request, res: Response) {
        const movieId = req.params.mid;
        movieDao.findMovieById(movieId)
            .then(movie => res.send(movie))
    }

    deleteMovie = () => {

    }

    createMovie = () => {

    }

    constructor(app: Express) {
        app.get('/api/movies', this.findAllMovies);
        app.get('/api/movies/:mid', this.findMovieById);
        app.delete('/api/movies/:mid', this.deleteMovie);
        app.post('/api/movies', this.createMovie);
    }

}
export default MoviesController;