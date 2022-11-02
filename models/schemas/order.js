const { Schema, model } = require('mongoose');

const order = new Schema({
    name: {
      type: String,
    },
    surname: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    delivery: {
      type: String,
    },
    payment: {
      type: String,
    },
    cart: [{}]
});


const Order = model('order', order);
  
module.exports = { Order };