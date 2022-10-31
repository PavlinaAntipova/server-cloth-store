const { Category } = require('../models/schemas/category');

const getCategories = async () => {
  return await Category.find({});
}

const getCategoryById = async (id) => {
  return await Category.findOne({ _id: id });
}

module.exports = {
    getCategories,
    getCategoryById
}