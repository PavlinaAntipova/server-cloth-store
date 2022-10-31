const { Offer } = require('../models/schemas/offer');

const getActualOffer = async () => {
  return await Offer.find({active: true});
}

module.exports = {
    getActualOffer,
    
}