const { addEmail } = require('../services/emails');

const post = async (req, res, next) => {
    try {
        const newEmail = await addEmail(req.body);
    if (newEmail) {
      return res.json({
      status: 'success',
      code: 201,
      data: {
        email: newEmail,
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