const mongoose = require('mongoose');

// 게시글 스키마
const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  imageUrl: { type: String },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

// 게시글 모델
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
