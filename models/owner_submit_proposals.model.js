const mongoose = require("mongoose");

const ownerSubmitProposalsModels = mongoose.model(
    "ownerSubmitProposalsModels",//------> like table name
    mongoose.Schema(
      {
        email:String,
        to:String,
        status:String,
        projectTitle: String,
        projectType: String,
        workMonths:String,
        projectBudget:String,
        plotLengthA: String,
        plotLengthB: String,
        plotWidthA: String,
        plotWidthB: String,
        actualPlotSize: String,
        floors: String,
        groundFloor:String,
        city: String,
        plotLocation: String,
        describeYourProject:String,
        projectFile:String,
        proposalCreatedTime:String,
        proposalSavedDate:String,
        ownerFirstName:String,
        ownerLastName:String,
        ownerCity:String,
        ownerCountry:String,
        ownerProfilePicUrl:String,
        selectedContractorCity:String,
        proEmail:String,
        proFirstName:String,
        proLastName:String,
        proCity:String,
        proCountry:String,
        proProfilePicUrl:String,
        proposalAcceptedTime:String,
        proposalAcceptedDate:String,
        
    
      },
      { timestamps: true },
    
    )
  );

  module.exports = {

    ownerSubmitProposalsModels
  };