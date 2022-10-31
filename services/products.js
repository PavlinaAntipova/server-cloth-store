const { Product } = require('../models/schemas/product');

const getProductByCondition = async (condition) => {
  return await Product.find(condition);
}


module.exports = {
    getProductByCondition
}