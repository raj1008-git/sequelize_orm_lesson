const {DataTypes} =require('sequelize');
const sequelize=require('../config/database');

const User=sequelize.define('User',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    firstName:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    lastName:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false,
    },
    createdAt:{
        type:DataTypes.DATE,
        defaultValue:DataTypes.NOW,
    },
    updatedAt:{
        type:DataTypes.DATE,
        defaultValue:DataTypes.NOW,
    },
});

module.exports=User;