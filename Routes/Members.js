const express = require('express');
const router = express.Router();
const membersController = require('./../Controllers/Members.js');
const auth = require("./../middlewares/Auth.js");


router.post('/', membersController.createMember);
router.delete('/:id', auth, membersController.deleteMember);
router.put('/:id', auth, membersController.modifyMember);
router.patch('/:id', auth, membersController.patchMember);
router.get('/:id', membersController.getOneMember);
router.get('/', membersController.getAllMembers);
router.post("/signup", membersController.signUpMember);
router.post("/login", membersController.loginMember);

module.exports = router;