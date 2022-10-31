import mongoose from "mongoose";
import moviesSchema from "./movies-schema";

const moviesModel = mongoose.model('MoviesModel', moviesSchema);

export default moviesModel;
