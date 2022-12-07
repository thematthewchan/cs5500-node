/**
 * @file Implements an Express Node HTTP server.
 */
import express, { Request, Response } from 'express';
import mongoose from "mongoose";
import UserDao from './src/daos/UserDao';
import LikeDao from './src/daos/LikeDao';
import LikeController from './src/controllers/LikeController';
import UserController from './src/controllers/UserController';
import TuitController from './src/controllers/TuitController';
import TuitDao from "./src/daos/TuitDao";
import BookmarkDao from './src/daos/BookmarkDao';
import BookmarkController from './src/controllers/BookmarkController';
import FollowDao from './src/daos/FollowDao';
import FollowController from './src/controllers/FollowController';
import MessageDao from './src/daos/MessageDao';
import MessageController from './src/controllers/MessageController';
const cors = require('cors')
const session = require("express-session")
const app = express();
app.use(cors({
  credentials: true,
  origin: true,
  optionsSuccessStatus: 200,
}));
app.use(express.json());

let sess = {
  secret: process.env.SECRET,
  cookie: {
    secure: false
  }
}

if (process.env.ENV === 'PRODUCTION') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoIndex: false,
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  family: 4
}

// mongoose.connect('mongodb://localhost:27017/tuiter', options);
mongoose.connect('mongodb+srv://user:user@atlascluster.yhpg964.mongodb.net/?retryWrites=true&w=majority', options);

const userDao = new UserDao();
const userController = new UserController(app, userDao);

const tuitDao = new TuitDao();
const tuitController = new TuitController(app, tuitDao);

const likeDao = new LikeDao();
const likeController = new LikeController(app, likeDao, tuitDao);

const bookmarkDao = new BookmarkDao();
const bookmarkController = new BookmarkController(app, bookmarkDao)

const followDao = new FollowDao();
const followController = new FollowController(app, followDao)

const messageDao = new MessageDao();
const messageController = new MessageController(app, messageDao)

const dbCallback = (movies: any) => {
  console.log('invoked when db returns data')
  console.log(movies);
}

app.get('/', (req: Request, res: Response) =>
  res.send('Tuiter Homepage'));

app.get('/hello', (req: Request, res: Response) =>
  res.send('Welcome to Foundation of Software Engineering!'));

const PORT: any = process.env.PORT || 4000;

if (process.env.ENV === "PRODUCTION") {
  app.set("trust proxy", 1); // trust first proxy
  sess.cookie.secure = true; // serve secure cookies
}

/**
 * Start a server listening at port 4000 locally
 * but use environment variable PORT on Heroku if available.
 */
app.listen(process.env.PORT || PORT);
