const { Post } = require('../models');

exports.createPost = async (req, res) => {
    try {
        const { title, content, userId } = req.body;
        const post = await Post.create({ title, content, userId });
        res.status(201).json(post);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getPostsByUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const posts = await Post.findAll({ where: { userId } });
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
