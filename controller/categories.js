const { getCategories, getCategoryById } = require('../services/categories');

const get = async (req, res, next) => {
    try {
      const results = await getCategories();
    res.json({
      status: 'success',
      code: 200,
      data: {
      categories: results,
      },
    });
  } catch (e) {
    console.error(e);
    next(e);
  }
};

const getById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await getCategoryById(id);
    if (result) {
      return res.json({
        status: 'success',
        code: 200,
        data: {
          category: result,
        },
      });
    }
      const code = 404;
      res.status(code).json({
        status: 'error',
        code: `${code}`,
        message: `Not found category id: ${id}`,
        data: 'Not Found',
      });
  } catch (e) {
    console.error(e);
    next(e);
  }
};

module.exports = {
    get, getById
}