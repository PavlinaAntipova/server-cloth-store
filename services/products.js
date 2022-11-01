const { Product } = require('../models/schemas/product');

const getProductByCondition = async (condition) => {
  if (condition?.["name"]) {
    const payload = condition.name.trim();
    return await Product.find({ "name": { $regex: payload, $options: 'i' } });
  }
  if (condition?.["parentCategory"] && condition?.["currentCategory"]) {
    if (condition?.s === "1") {
       return await Product.find({ "category.parentCategory": condition.currentCategory} );
    } else {
      return await Product.find({ category: {parentCategory: condition.parentCategory, currentCategory: condition.currentCategory} });
    }
  }

  return await Product.find(condition);
}


module.exports = {
    getProductByCondition
}