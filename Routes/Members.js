const express = require('express');
const router = express.Router();
const membersController = require('./../Controllers/members.js');

router.post('/', membersController.createMember);
router.delete('/:id', membersController.deleteMember);
router.put('/:id', membersController.modifyMember);
router.patch('/:id', membersController.patchMember);

module.exports = router;