const sequelize = require('../config/database');
const User = require('./user');
const Post = require('./post');


User.hasMany(Post, { foreignKey: 'userId', onDelete: 'CASCADE' });
Post.belongsTo(User, { foreignKey: 'userId' });


module.exports = { sequelize, User, Post };
