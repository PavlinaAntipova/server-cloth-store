const express = require('express');

const ctrlOrders = require('../../controller/orders');

const router = express.Router();


router.post('/', ctrlOrders.post);


module.exports = router