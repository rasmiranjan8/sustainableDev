const express = require('express');
const router = express.Router();
const { HandleUserLogin, HandleUserSignUp } = require('../Controllers/user');

router.post('/signup', HandleUserSignUp);
router.post('/login', HandleUserLogin);

module.exports = router;
