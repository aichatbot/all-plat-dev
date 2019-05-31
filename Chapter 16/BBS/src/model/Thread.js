import mongoose from 'mongoose';
import User from './User';

const ThreadSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
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
});

const Thread = mongoose.model('Thread', ThreadSchema);
export default Thread;
