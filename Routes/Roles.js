const express = require('express');
const router = express.Router();
const rolesController = require('./../Controllers/Roles.js');
const auth = require("./../middlewares/Auth.js");


router.post('/', auth, rolesController.createRole);
router.get('/:id', auth, rolesController.getOneRole);
router.get('/', auth, rolesController.getAllRoles);

module.exports = router;

