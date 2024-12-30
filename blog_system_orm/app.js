const express = require('express');
const { sequelize } = require('./models');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');




const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

(async () => {
    try {
        await sequelize.sync({ force: true });
        console.log('Database synced!');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
        app.use('/api', userRoutes);
        app.use('/api', postRoutes);
    } catch (error) {
        console.error('Error syncing database:', error);
    }
})();
