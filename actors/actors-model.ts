import mongoose from "mongoose";
import actorsSchema from "./actors-schema";

const actorsModel = mongoose.model(
    'ActorsModel', actorsSchema);

export default actorsModel;
