const { Product } = require('../models/schemas/product');

const getProductByCondition = async (condition) => {

  if (condition?.["name"]) {
    const payload = condition.name.trim();
    return await Product.find({ "name": { $regex: payload, $options: 'i' } });
  }

  if (condition?.["parentCategory"] && condition?.["currentCategory"]) {
    return await Product.find({ category: condition });
  }

  return await Product.find(condition);
}


module.exports = {
    getProductByCondition
}