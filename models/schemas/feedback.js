const { Schema, model } = require('mongoose');

const feedback = new Schema({
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    subject: {
      type: String,
    },
    message: {
      type: String,
    },
});


const Feedback = model('feedback', feedback);
  
module.exports = { Feedback };