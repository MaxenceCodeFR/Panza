const express = require('express');
const router = express.Router();
const rolesController = require('./../Controllers/Roles.js');

router.post('/', rolesController.createRole);

module.exports = router;

