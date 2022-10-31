const { getProductByCondition } = require('../services/products');

const get = async (req, res, next) => {
  try {
       const results = await getProductByCondition(req.query);
    res.json({
      status: 'success',
      code: 200,
      data: {
      products: results,
      },
    });
  } catch (e) {
    console.error(e);
    next(e);
  }
};

module.exports = {
    get
}