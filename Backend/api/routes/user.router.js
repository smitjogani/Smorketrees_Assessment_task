const express = require('express');
const { createUserWithAddress } = require('../controller/user.controller');
const router = express.Router();

router.post('/add', createUserWithAddress);

module.exports = router;
