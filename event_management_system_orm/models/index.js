const User = require('./user');
const Event = require('./event');
const Registration = require('./registration');
const sequelize = require('../config/database');

// Define many-to-many relationships
User.belongsToMany(Event, { through: Registration, foreignKey: 'userId' });
Event.belongsToMany(User, { through: Registration, foreignKey: 'eventId' });

module.exports = { sequelize, User, Event, Registration };
