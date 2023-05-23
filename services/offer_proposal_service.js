const {OfferProposalsModel} = require("../models/offer_proposal.model");




async function offerProposals(params, callback) { //params ke ander models argument pass horaha hai params=models
    if (!params.proEmail) {
      return callback(
        {
          message: "Email is Required",
        },
        ""
      );
    }
  
    const OfferProposal = new OfferProposalsModel(params); //create object of product model params=model passing data in data base here
    OfferProposal
      .save()
      .then((response) => {
        return callback(null, response);
      })
      .catch((error) => {
        return callback(error);
      });
  }


  async function getOfferProposal(params, callback) {
    const email = params.proEmail;
    var condition = email
      ? { email: { $regex: new RegExp(email), $options: "i" } }
      : {};
  
      OfferProposalsModel
      .find(condition)
      .then((response) => {
        return callback(null, response);
      })
      .catch((error) => {
        return callback(error);
      });
  }

  async function updateOfferStatus(params, callback) {
    const userId = params.userId;
  
    OfferProposalsModel
      .findByIdAndUpdate(userId, params, { useFindAndModify: false })
      .then((response) => {
        if (!response) callback(`Cannot update Tutorial with id=${userId}. Maybe Tutorial was not found!`);
        else callback(null, response);
      })
      .catch((error) => {
        return callback(error);
      });
  }
  module.exports = {
    offerProposals,
    getOfferProposal,
    updateOfferStatus,
   
  };