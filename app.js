const express = require('express');
const app = express();
const mongoose = require('mongoose'); // npm install mongoose
const userController = require('./controllers/UserController');
mongoose.connect('mongodb+srv://user:user@atlascluster.yhpg964.mongodb.net/?retryWrites=true&w=majority')
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
userController(app);
module.exports = app;