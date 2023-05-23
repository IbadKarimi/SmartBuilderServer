const mongoose = require("mongoose");

const OfferProposalsModel = mongoose.model(
    "OfferProposalsModels",//------> like table name
    mongoose.Schema(
      {
        proposalId:String,
        proEmail:String,
        proFirstName:String,
        proLastName:String,
        proCity:String,
        proCountry:String,
        proProfilePicUrl:String,
        proposalAcceptedTime:String,
        proposalAcceptedDate:String,
        offer:String,
        offerCreatedTime:String,
        offerSavedDate:String,
        offerStatus:String,
        projectTitle:String,
        ownerEmail:String,
        offerAcceptedTime:String,
        offerAcceptedDate:String,

        
        
        
    
      },
      { timestamps: true },
    
    )
  );

  module.exports = {

    OfferProposalsModel,
  };