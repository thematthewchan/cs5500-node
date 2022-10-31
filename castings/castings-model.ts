import mongoose from "mongoose";
import castingsSchema from "./castings-schema";

const castingsModel = mongoose.model(
    'CastingsModel', castingsSchema
);

export default castingsModel

