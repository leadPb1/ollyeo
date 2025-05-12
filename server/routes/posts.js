const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

// 게시글 작성
router.post('/', async (req, res) => {
  try {
    const { title, content, imageUrl, userId } = req.body;

    const newPost = new Post({ title, content, imageUrl, userId });
    await newPost.save();

    res.status(201).json({ message: 'Post created successfully', post: newPost });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
