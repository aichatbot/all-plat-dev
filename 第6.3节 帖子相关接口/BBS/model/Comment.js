const mongoose = require('mongoose');
const User = require('./User');

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
module.exports = Comment;
