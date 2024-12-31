const { Event } = require('../models');


exports.createEvent = async (req, res) => {
    try {
        const event = await Event.create(req.body);
        res.status(201).json(event);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.getAllEvents = async (req, res) => {
    try {
        const events = await Event.findAll();
        res.status(200).json(events);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.updateEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await Event.update(req.body, { where: { id } });

        if (updated) {
            const updatedEvent = await Event.findByPk(id);
            res.status(200).json(updatedEvent);
        } else {
            res.status(404).json({ message: 'Event not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.deleteEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Event.destroy({ where: { id } });

        if (deleted) {
            res.status(204).send(); // No content
        } else {
            res.status(404).json({ message: 'Event not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
