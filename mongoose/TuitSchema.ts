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
}, { collection: 'tuits' });

export default TuitSchema;
