const {Feedback} = require('../models/schemas/feedback');


const addFeedback = async (body) => {
    return await Feedback.create({ ...body });
}


module.exports = {
  addFeedback
}