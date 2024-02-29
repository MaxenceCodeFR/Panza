const express = require('express');
const router = express.Router();
const workshopsController = require('./../Controllers/Workshops.js');
const auth = require("./../middlewares/Auth.js");


router.post('/', auth, workshopsController.createWorkshops);
router.delete('/:id', auth, workshopsController.deleteWorkshops);
router.put('/:id', auth, workshopsController.modifyWorkshops);
router.patch('/:id', auth, workshopsController.patchWorkshops);
router.get('/:id', workshopsController.getOneWorkshops);
router.get('/', workshopsController.getAllWorkshops);

module.exports = router;