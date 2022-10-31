const { getActualOffer } = require('../services/offers');

const get = async (req, res, next) => {
    try {
      const results = await getActualOffer();
    res.json({
      status: 'success',
      code: 200,
      data: {
      offers: results,
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