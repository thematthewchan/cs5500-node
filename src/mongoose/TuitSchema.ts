/**
 * @file Implements mongoose schema to CRUD
 * documents in the tuits collection
 */
import mongoose from 'mongoose';
import User from "../models/User";

const TuitSchema = new mongoose.Schema({
  tuit: { type: String, required: true },
  postedOn: { type: Date, default: Date.now, required: true },
  // postedBy: {type: User, required: true},
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'UserModel' },
  stats: {
    replies: { type: Number, default: 0 },
    retuits: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
  }

}, { collection: 'tuits' });

export default TuitSchema;
