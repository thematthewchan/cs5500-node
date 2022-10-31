import mongoose from "mongoose";

const moviesSchema = new mongoose.Schema({
    title: String,
    released: Date,
    rating: String,
    year: Number,
    director: String,
    cast: [String]
}, {collection: 'movies'});

export default moviesSchema;