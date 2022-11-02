const express = require('express');

const ctrlEmails = require('../../controller/emails');

const router = express.Router();


router.post('/', ctrlEmails.post);


module.exports = router