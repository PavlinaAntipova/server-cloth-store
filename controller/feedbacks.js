const { addFeedback } = require('../services/feedbacks');

const post = async (req, res, next) => {
    try {
        const newFeedback = await addFeedback(req.body);
    if (newFeedback) {
      return res.json({
      status: 'success',
      code: 201,
      data: {
        feedback: newFeedback,
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