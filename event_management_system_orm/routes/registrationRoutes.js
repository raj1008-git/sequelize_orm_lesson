const express = require('express');
const { createRegistration } = require('../controllers/registrationController');

const router = express.Router();

router.post('/registrations', createRegistration);

module.exports = router;
