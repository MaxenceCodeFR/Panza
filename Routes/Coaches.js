const express = require('express');
const router = express.Router();
const coachesController = require('./../Controllers/Coaches.js');
const auth = require("./../middlewares/Auth.js");


router.post('/', auth, coachesController.createCoach);
router.delete('/:id', auth, coachesController.deleteCoach);
router.get('/:id', coachesController.getOneCoach);
router.get('/', coachesController.getAllCoaches);

module.exports = router;