const express = require('express');
const router = express.Router();
const workshopsController = require('./../Controllers/Workshops.js');

router.post('/', workshopsController.createWorkshops);
router.delete('/:id', workshopsController.deleteWorkshops);
router.put('/:id', workshopsController.modifyWorkshops);
router.patch('/:id', workshopsController.patchWorkshops);

module.exports = router;