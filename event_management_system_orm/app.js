const express = require('express');
const { sequelize } = require('./models');
const userRoutes = require('./routes/userRoutes');  // Import the userRoutes
const registrationRoutes=require('./routes/registrationRoutes');
const eventRoutes=require('./routes/eventRoutes');
const app = express();
app.use(express.json());

// Use the user routes
app.use('/api', userRoutes); 
app.use('/api', eventRoutes);
app.use('/api', registrationRoutes); // Mount the userRoutes on the /api path

const PORT = process.env.PORT || 3001;

(async () => {
    try {
        await sequelize.sync({ });
        console.log('Database synced!');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    } catch (err) {
        console.error('Database sync failed:', err);
    }
})();
