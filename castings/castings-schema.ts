import mongoose from "mongoose";

const castingsSchema = new mongoose.Schema({
    actor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ActorsModel'
    },
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MoviesModel'
    }
}, {collection: 'castings'});
export default castingsSchema;

