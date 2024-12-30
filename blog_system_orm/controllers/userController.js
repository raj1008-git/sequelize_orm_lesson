const { User, Post } = require('../models');

exports.createUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        const user = await User.create({ name, email });
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll({ include: Post });
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
