const express = require('express');
const router = express.Router();
const eventsController = require('./../Controllers/Events.js');
const auth = require("./../middlewares/Auth.js");


router.post('/', eventsController.createEvent);
router.delete('/:id', auth, eventsController.deleteEvent);
router.put('/:id', auth, eventsController.modifyEvent);
router.patch('/:id', auth, eventsController.patchEvent);
router.get('/:id', eventsController.getOneEvent);
router.get('/', eventsController.getAllEvents);
router.post('/:id/member', eventsController.addMember);
module.exports = router;