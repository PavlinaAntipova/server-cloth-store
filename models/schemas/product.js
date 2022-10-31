const { Schema, model } = require('mongoose');

const product = new Schema({
    name: {
      type: String
    },
    size: {
      type: String
    },
    price: {
      type: Number
    },
    tag: {
      type: String
    },
    category: {
      type: String
    },
    quantity: {
      type: Number
    },
    img: {
      type: String
    },
});


const Product = model('product', product);
  
module.exports = { Product };