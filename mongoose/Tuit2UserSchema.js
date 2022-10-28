/**
 * @file Implements mongoose schema to CRUD
 * documents in the Tuit2User collection
 */
import mongoose from "mongoose";
const tuit2UserSchema = new mongoose.Schema({
    tuit: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TuitModel'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    },
}, { collection: 'tuit2user' });
export default tuit2UserSchema;
