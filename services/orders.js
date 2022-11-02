const {Order} = require('../models/schemas/order');


const addOrder = async (body) => {
    return await Order.create({ ...body });
}


module.exports = {
  addOrder
}