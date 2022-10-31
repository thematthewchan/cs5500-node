import {Express, Request, Response} from "express";
import * as castingsDao from './castings-dao';

module.exports = (app: Express) => {
    const findActorsInMovie = (req: Request, res: Response) =>
        castingsDao
            .findActorsInMovie(req.params.mid)
            .then(actors =>
                res.json(actors));
    const findMoviesForActor = async (req: Request, res: Response) => {
        const actorId = req.params.aid;
        const movies = await castingsDao.findMoviesForActor(actorId);
        res.json(movies);
    }

    const addActorToMovie = (req: Request, res: Response) =>
        castingsDao.addActorToMovie(req.params.aid, req.params.mid)
            .then(status => res.send(status));
    const addMovieToActor = async (req: Request, res: Response) =>
        res.send(await castingsDao.addMovieToActor(
            req.params.mid, req.params.aid));
    const removeActorFromMovie = (req: Request, res: Response) =>
        castingsDao.removeActorFromMovie(
            req.params.aid, req.params.mid)
            .then(status => res.send(status));
    const removeMovieFromActor = (req: Request, res: Response) =>
        castingsDao.removeMovieFromActor(
            req.params.mid, req.params.aid)
            .then(status => res.send(status));

    app.get('/api/movies/:mid/actors', findActorsInMovie);
    app.get('/api/actors/:aid/movies', findMoviesForActor);

    app.post('/api/actors/:aid/movies/:mid', addMovieToActor);
    app.post('/api/movies/:aid/actors/:aid', addActorToMovie);

    app.delete('/api/actors/:aid/movies/:mid', removeMovieFromActor);
    app.delete('/api/movies/:aid/actors/:aid', removeActorFromMovie);
}