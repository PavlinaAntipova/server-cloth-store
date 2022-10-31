const express = require('express');
const ctrlCategories = require('../../controller/categories');

const router = express.Router();

router.get('/', ctrlCategories.get);
router.get('/:id', ctrlCategories.getById);

module.exports = router