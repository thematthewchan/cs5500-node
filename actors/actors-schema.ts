import mongoose from "mongoose";
const actorsSchema = new mongoose.Schema({
    firstName: {type: String, required: true, defaultValue: 'John'},
    lastName: String
}, {collection: 'actors'});

export default actorsSchema;

