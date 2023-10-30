const express = require('express');
const { sendMail } = require('./sendMail.controller')

const router = express.Router();

router.post('/api/suscribe', sendMail);

module.exports = router;