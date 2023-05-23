const {proAcceptedProposalModel} = require("../models/pro_accepted_proposal.model");



async function proAcceptProposals(params, callback) { //params ke ander models argument pass horaha hai params=models
    if (!params.accepterEmail) {
      return callback(
        {
          message: "Accepter email is Required",
        },
        ""
      );
    }

  
    const proAcceptedProposal = new proAcceptedProposalModel(params); //create object of product model params=model passing data in data base here
    proAcceptedProposal
      .save()
      .then((response) => {
        return callback(null, response);
      })
      .catch((error) => {
        return callback(error);
      });
  }


  async function getProAcceptProposal(params, callback) {
    const email = params.senderEmail;
    var condition = email
      ? { email: { $regex: new RegExp(email), $options: "i" } }
      : {};
  
      proAcceptedProposalModel
      .find(condition)
      .then((response) => {
        return callback(null, response);
      })
      .catch((error) => {
        return callback(error);
      });
  }
  module.exports = {
    proAcceptProposals,
    getProAcceptProposal
   
   
  };