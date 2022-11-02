const { Schema, model } = require('mongoose');
const Joi = require("joi");

const email = new Schema({
    email: {
      type: String,
    }
});

const schemaAddEmail = Joi.object({ email: Joi.string().email().required() });

const Email = model('email', email);
  
module.exports = { Email, schemaAddEmail };