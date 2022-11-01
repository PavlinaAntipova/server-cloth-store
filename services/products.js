const { Product } = require('../models/schemas/product');

const getProductByCondition = async (condition) => {
  const payload = condition.name.trim();
  console.log(condition?.["name"]);
  if (condition?.["name"]) {
    return await Product.find({ "name": { $regex: payload, $options: 'i' } });
  }
  return await Product.find(condition);
}


module.exports = {
    getProductByCondition
}