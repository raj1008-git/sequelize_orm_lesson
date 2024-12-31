const {Sequelize} =require('sequelize');
const sequelize=new Sequelize('user_management_db','root','1008',{
    host:'localhost',
    dialect:'mysql',
});

module.exports=sequelize;