const { Schema, model } = require('mongoose');


const email = new Schema({
    email: {
      type: String,
    }
});


const Email = model('email', email);
  
module.exports = { Email };