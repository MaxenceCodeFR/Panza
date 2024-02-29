const express = require('express');
const router = express.Router();
const selectionsController = require('./../Controllers/Selections.js');
const auth = require("./../middlewares/Auth.js");

router.post('/', selectionsController.createSelections);
router.delete('/:id', auth, selectionsController.deleteSelections);
router.put('/:id', auth, selectionsController.modifySelections);
router.patch('/:id', auth, selectionsController.patchSelections);
router.get('/:id', selectionsController.getOneSelections);
router.get('/', selectionsController.getAllSelections);

module.exports = router;