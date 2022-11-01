const { Product } = require('../models/schemas/product');

const getProductByCondition = async (condition) => {
  if (condition.title === "name") {
    return await Product.find(
    { "name": { "$regex": condition.name, "$options": "i" } }).exec();
  }
  return await Product.find(condition);
}


module.exports = {
    getProductByCondition
}