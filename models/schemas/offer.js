const { Schema, model } = require('mongoose');

const offer = new Schema({
    title: {
      type: String
    },
     text: {
      type: String
    },
     img: {
      type: String
    },
     tag: {
      type: String
    },
     active: {
      type: Boolean
    },
     
});


const Offer = model('offer', offer);
  
module.exports = { Offer };