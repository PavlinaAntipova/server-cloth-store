const { Product } = require('../models/schemas/product');

const getProductByCondition = async (condition) => {
  if (condition?.["name"]) {
    const payload = condition.name.trim();
    return await Product.find({ "name": { $regex: payload, $options: 'i' } });
  }

  if (condition?.["parentCategory"] && condition?.["currentCategory"]) {
    console.log(condition);
    if (condition?.s) {
       return await Product.find({ "category.parentCategory": condition.currentCategory} );
    } else {
      return await Product.find({ category: condition });
    }
  }

  return await Product.find(condition);
}


module.exports = {
    getProductByCondition
}