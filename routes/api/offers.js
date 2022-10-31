const express = require('express');
const ctrlOffers = require('../../controller/offers');

const router = express.Router();

router.get('/', ctrlOffers.get);

module.exports = router