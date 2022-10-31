/**
 * @file Implements mongoose schema to CRUD
 * documents in the bookmarks collection
 */
import mongoose from 'mongoose';

const BookmarkSchema = new mongoose.Schema({
  bookmarkedTuit: { type: mongoose.Schema.Types.ObjectId, ref: 'TuitModel' },
  bookmarkedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'UserModel' },
}, { collection: 'bookmarks' });

export default BookmarkSchema;
