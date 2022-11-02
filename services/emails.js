
const {Email} = require('../models/schemas/email');


const addEmail = async (body) => {
    const existedEmail = await Email.find({ email: body.email });
    if (existedEmail.length > 0) {
        return null;
    }
    return await Email.create({ ...body });
 
}


module.exports = {
  addEmail
}