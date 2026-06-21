const express = require("express");
const router = express.Router();
const UserController = require('../Controllers/user');

router.get('/', (req, res) => {
    res.send("User API Working");
});

router.post('/', UserController.register);

module.exports = router;