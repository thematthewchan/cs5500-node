/**
 * @file Implements mongoose schema to CRUD
 * documents in the messages collection
 */
import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
    message: { type: String, required: true },
    sentOn: { type: Date, default: Date.now },
    to: { type: mongoose.Schema.Types.ObjectId, ref: 'UserModel', required: true },
    from: { type: mongoose.Schema.Types.ObjectId, ref: 'UserModel', required: true },
}, { collection: 'messages' });

export default MessageSchema;
