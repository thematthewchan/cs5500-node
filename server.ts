/**
 * @file Implements an Express Node HTTP server.
 */

import LikesController
    from "./likes/LikesController";


import TuitDao from "./tuits/TuitDao";
import TuitController
    from "./tuits/TuitController";

import UserDao from "./users/UserDao";
import UserController from "./users/UserController";
import ActorController from "./actors/actors-controller";
import ActorsService from "./actors/actors-service";
import ActorsDao from "./actors/actors-dao";
import express, {Request, Response} from 'express';
import * as mongoose from "mongoose";
import * as moviesDao from "./movies/movies-dao";
import MoviesController from "./movies/movies-controller";
const cors = require('cors')
const app = express();
app.use(cors());
app.use(express.json());


const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4
}

mongoose.connect('mongodb://localhost:27017/tuiter', options);

const userDao = new UserDao();
const userController = new UserController(app, userDao);

const dbCallback = (movies: any) => {
    console.log('invoked when db returns data')
    console.log(movies);
}

// moviesDao
//     .findAllMovies()
//     .then(movies => console.log(movies));

function sayHello (req: Request, res: Response) {
    res.send('Hi from FSD 1!!!');
}

const sayHello2 = (req: Request, res: Response) =>
    res.send('Hi from FSD 2!!!');

const movieController = new MoviesController(app);


const actorDao = new ActorsDao();
const actorService = new ActorsService(actorDao);
const actorController = new ActorController(app, actorService);

require('./castings/castings-controller')(app);

app.get('/', sayHello);

app.get('/hello', sayHello2);

const tuitDao = TuitDao.getInstance();
const tuitController = TuitController
    .getInstance(app, tuitDao);
/**
 * Start a server listening at port 4000 locally
 * but use environment variable PORT on Heroku if available.
 */
LikesController(app);
const PORT = 4000;
app.listen(process.env.PORT || PORT);
