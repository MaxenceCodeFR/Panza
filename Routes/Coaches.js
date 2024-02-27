const express = require('express');
const router = express.Router();
const coachesController = require('./../Controllers/Coaches.js');

router.post('/', coachesController.createCoach);
router.delete('/:id', coachesController.deleteCoach);

module.exports = router;