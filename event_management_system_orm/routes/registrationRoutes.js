const express = require('express');
const { registerUser,getAllRegistrations,getRegistrationById,updateRegistration,deleteRegistration } = require('../controllers/registrationController');

const router = express.Router();

router.post('/registrations', registerUser);

router.get('/registrations',getAllRegistrations);

router.get('/registrations/:id', getRegistrationById);

router.put('/registrations/:id',updateRegistration);

router.delete('/registrations/:id',deleteRegistration);

module.exports = router;
