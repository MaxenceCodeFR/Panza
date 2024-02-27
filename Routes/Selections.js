const express = require('express');
const router = express.Router();
const selectionsController = require('./../Controllers/Selections.js');

router.post('/', selectionsController.createSelections);
router.delete('/:id', selectionsController.deleteSelections);
router.put('/:id', selectionsController.modifySelections);
router.patch('/:id', selectionsController.patchSelections);

module.exports = router;