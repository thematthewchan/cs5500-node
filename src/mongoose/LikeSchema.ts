/**
 * @file Implements mongoose schema to CRUD
 * documents in the likes collection
 */
import mongoose from 'mongoose';

const LikeSchema = new mongoose.Schema({
  tuit: { type: mongoose.Schema.Types.ObjectId, ref: 'TuitModel' },
  likedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'UserModel' },
}, { collection: 'likes' });

export default LikeSchema;
