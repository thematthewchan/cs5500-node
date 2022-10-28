/**
 * @file Implements mongoose schema to CRUD
 * documents in the follows collection
 */
import mongoose from 'mongoose';
const FollowSchema = new mongoose.Schema({
    userFollowed: { type: mongoose.Schema.Types.ObjectId, ref: 'UserModel' },
    userFollowing: { type: mongoose.Schema.Types.ObjectId, ref: 'UserModel' },
}, { collection: 'follows' });
export default FollowSchema;
