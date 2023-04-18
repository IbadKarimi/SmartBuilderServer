const {ownerSubmitProposalsModels} = require("../models/owner_submit_proposals.model");

async function ownerSubmitProposals(params, callback) { //params ke ander models argument pass horaha hai params=models
    if (!params.email) {
      return callback(
        {
          message: "Email is Required",
        },
        ""
      );
    }
  
    const ownerSubmitProposal = new ownerSubmitProposalsModels(params); //create object of product model params=model passing data in data base here
    ownerSubmitProposal
      .save()
      .then((response) => {
        return callback(null, response);
      })
      .catch((error) => {
        return callback(error);
      });
  }


  async function getOwnerSubmitProposals(params, callback) {
    const email = params.email;
    var condition = email
      ? { email: { $regex: new RegExp(email), $options: "i" } }
      : {};
  
      ownerSubmitProposalsModels
      .find(condition)
      .then((response) => {
        return callback(null, response);
      })
      .catch((error) => {
        return callback(error);
      });
  }
  module.exports = {
    ownerSubmitProposals,
    getOwnerSubmitProposals,
   
   
  };