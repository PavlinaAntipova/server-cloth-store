const { Schema, model } = require('mongoose');

const category = new Schema({
    name: {
      type: String
    },
    parentCategory: {
        type: String
    }, 
    childrenCategories: {
      type: [String],
    },
});


const Category = model('category', category);
  
module.exports = { Category };


