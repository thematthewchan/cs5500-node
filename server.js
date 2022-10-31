"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file Implements an Express Node HTTP server.
 */
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const UserDao_1 = __importDefault(require("./src/daos/UserDao"));
const LikeDao_1 = __importDefault(require("./src/daos/LikeDao"));
const LikeController_1 = __importDefault(require("./src/controllers/LikeController"));
const UserController_1 = __importDefault(require("./src/controllers/UserController"));
const TuitController_1 = __importDefault(require("./src/controllers/TuitController"));
const TuitDao_1 = __importDefault(require("./src/daos/TuitDao"));
const BookmarkDao_1 = __importDefault(require("./src/daos/BookmarkDao"));
const BookmarkController_1 = __importDefault(require("./src/controllers/BookmarkController"));
const FollowDao_1 = __importDefault(require("./src/daos/FollowDao"));
const FollowController_1 = __importDefault(require("./src/controllers/FollowController"));
const MessageDao_1 = __importDefault(require("./src/daos/MessageDao"));
const MessageController_1 = __importDefault(require("./src/controllers/MessageController"));
const cors = require('cors');
const app = (0, express_1.default)();
app.use(cors());
app.use(express_1.default.json());
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4
};
// mongoose.connect('mongodb://localhost:27017/tuiter', options);
mongoose_1.default.connect('mongodb+srv://user:user@atlascluster.yhpg964.mongodb.net/?retryWrites=true&w=majority', options);
const userDao = new UserDao_1.default();
const userController = new UserController_1.default(app, userDao);
// const tuitDao = TuitDao.getInstance();
// const tuitController = TuitController
// .getInstance(app, tuitDao);
const tuitDao = new TuitDao_1.default();
const tuitController = new TuitController_1.default(app, tuitDao);
const likeDao = new LikeDao_1.default();
const likeController = new LikeController_1.default(app, likeDao);
const bookmarkDao = new BookmarkDao_1.default();
const bookmarkController = new BookmarkController_1.default(app, bookmarkDao);
const followDao = new FollowDao_1.default();
const followController = new FollowController_1.default(app, followDao);
const messageDao = new MessageDao_1.default();
const messageController = new MessageController_1.default(app, messageDao);
const dbCallback = (movies) => {
    console.log('invoked when db returns data');
    console.log(movies);
};
app.get('/', (req, res) => res.send('Welcome to Foundation of Software Engineering!!!!'));
app.get('/hello', (req, res) => res.send('Welcome to Foundation of Software Engineering!'));
/**
 * Start a server listening at port 4000 locally
 * but use environment variable PORT on Heroku if available.
 */
const PORT = 4000;
app.listen(process.env.PORT || PORT);

// const express = require("express");
// const app = express();

// /**
//  * @file server file to run the ports
//  */
// app.get("/hello", (req, res) => res.send("Hello World!"));

// const PORT = 4000;
// app.listen(process.env.PORT || PORT);





// /**
//  * @file Implements an Express Node HTTP server.
//  */
// import express from 'express';
// import mongoose from "mongoose";
// import UserDao from './src/daos/UserDao';
// import LikeDao from './src/daos/LikeDao';
// import LikeController from './src/controllers/LikeController';
// import UserController from './src/controllers/UserController';
// import TuitController from './src/controllers/TuitController';
// import TuitDao from "./src/daos/TuitDao";
// import BookmarkDao from './src/daos/BookmarkDao';
// import BookmarkController from './src/controllers/BookmarkController';
// import FollowDao from './src/daos/FollowDao';
// import FollowController from './src/controllers/FollowController';
// import MessageDao from './src/daos/MessageDao';
// import MessageController from './src/controllers/MessageController';
// // const cors = require('cors')
// const app = express();
// // app.use(cors());
// app.use(express.json());
// const options = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     autoIndex: false,
//     maxPoolSize: 10,
//     serverSelectionTimeoutMS: 5000,
//     socketTimeoutMS: 45000,
//     family: 4
// };
// mongoose.connect('mongodb://localhost:27017/tuiter', options);
// const userDao = new UserDao();
// const userController = new UserController(app, userDao);
// // const tuitDao = TuitDao.getInstance();
// // const tuitController = TuitController
// // .getInstance(app, tuitDao);
// const tuitDao = new TuitDao();
// const tuitController = new TuitController(app, tuitDao);
// const likeDao = new LikeDao();
// const likeController = new LikeController(app, likeDao);
// const bookmarkDao = new BookmarkDao();
// const bookmarkController = new BookmarkController(app, bookmarkDao);
// const followDao = new FollowDao();
// const followController = new FollowController(app, followDao);
// const messageDao = new MessageDao();
// const messageController = new MessageController(app, messageDao);
// const dbCallback = (movies) => {
//     console.log('invoked when db returns data');
//     console.log(movies);
// };
// app.get('/', (req, res) => res.send('Welcome to Foundation of Software Engineering!!!!'));
// app.get('/hello', (req, res) => res.send('Welcome to Foundation of Software Engineering!'));
// /**
//  * Start a server listening at port 4000 locally
//  * but use environment variable PORT on Heroku if available.
//  */
// const PORT = 4000;
// app.listen(process.env.PORT || PORT);
