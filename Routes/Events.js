const express = require('express');
const router = express.Router();
const eventsController = require('./../Controllers/Events.js');

router.post('/', eventsController.createEvent);
router.delete('/:id', eventsController.deleteEvent);
router.put('/:id', eventsController.modifyEvent);
router.patch('/:id', eventsController.patchEvent);

module.exports = router;