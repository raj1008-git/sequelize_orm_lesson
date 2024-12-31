const { Registration } = require('../models');


exports.registerUser = async (req, res) => {
    try {
        const { userId, eventId } = req.body;
        const registration = await Registration.create({ userId, eventId });
        res.status(201).json(registration);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getAllRegistrations = async (req, res) => {
    try {
        const registrations = await Registration.findAll();
        res.status(200).json(registrations);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.getRegistrationById = async (req, res) => {
    try {
        const registration = await Registration.findByPk(req.params.id);
        if (!registration) {
            return res.status(404).json({ message: 'Registration not found' });
        }
        res.status(200).json(registration);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.updateRegistration = async (req, res) => {
    try {
        const registration = await Registration.findByPk(req.params.id);
        if (!registration) {
            return res.status(404).json({ message: 'Registration not found' });
        }

        const { userId, eventId } = req.body;
        registration.userId = userId;
        registration.eventId = eventId;

        await registration.save();
        res.status(200).json(registration);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.deleteRegistration = async (req, res) => {
    try {
        const registration = await Registration.findByPk(req.params.id);
        if (!registration) {
            return res.status(404).json({ message: 'Registration not found' });
        }

        await registration.destroy();
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
