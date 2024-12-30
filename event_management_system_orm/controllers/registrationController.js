const { Registration } = require('../models');

exports.registerUser = async (req, res) => {
    try {
        const { userId, eventId } = req.body;
        const registration = await Registration.create({ userId, eventId }); // Use lowercase userId and eventId
        res.status(201).json(registration);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
