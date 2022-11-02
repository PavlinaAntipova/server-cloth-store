const { addOrder } = require('../services/orders');

const post = async (req, res, next) => {
    try {
    const newOrder = await addOrder(req.body);
    if (newOrder) {
      return res.json({
      status: 'success',
      code: 201,
      data: {
        order: newOrder,
      },
    });
    } 
      const code = 400;
     res.status(code).json({
        status: 'error',
        code: `${code}`,
        message: `Bad Request`,
        data: 'Not Created',
      });
    
  } catch (e) {
    console.error(e);
    next(e);
  }
};

module.exports = {
   post
}