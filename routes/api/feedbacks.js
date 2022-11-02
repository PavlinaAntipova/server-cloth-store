const express = require('express');

const ctrlFeedbacks = require('../../controller/feedbacks');

const router = express.Router();


router.post('/', ctrlFeedbacks.post);


module.exports = router