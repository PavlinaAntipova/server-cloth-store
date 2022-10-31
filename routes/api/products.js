const express = require('express');
const ctrlProducts = require('../../controller/products');

const router = express.Router();

router.get('/', ctrlProducts.get);

module.exports = router