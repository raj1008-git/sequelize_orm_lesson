const express = require('express');
const { createPost, getPostsByUser } = require('../controllers/postController');

const router = express.Router();

router.post('/posts', createPost);
router.get('/posts/:userId', getPostsByUser);

module.exports = router;
