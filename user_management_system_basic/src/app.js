const sequelize=require('./config/database');
const User=require('./models/User');
const userRoutes=require('./routes/userRoutes');
const express=require('express');

const app=express();
app.use(express.json());
app.use('/api',userRoutes);

const start=async ()=>{
    try{
        await sequelize.authenticate();
        console.log('Database Connected');
        await sequelize.sync({force:true});
        console.log('Tables Created');
    }catch(error){
        console.error('Error connecting to the database:', error);
    }

    const PORT=process.env.PORT || 3000;
    app.listen(PORT, ()=>{
        console.log('Server running on http://localhost:${PORT}');
    });
};

start(); 