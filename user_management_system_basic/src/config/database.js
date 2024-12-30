const {Sequelize} =require('sequelize');
const sequelize=new Sequelize('user_management_db','root','Vairagya@112',{
    host:'localhost',
    dialect:'mysql',
});

module.exports=sequelize;