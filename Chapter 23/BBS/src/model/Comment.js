import mongoose from 'mongoose';
import User from './User';

const CommentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    trim: true,
  },
  posttime: {
    type: Date,
    default: Date.now(),
  },
  author: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: 'User',
  },
  target: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: 'Thread',
  },
});

const Comment = mongoose.model('Comment', CommentSchema);
export default Comment;
