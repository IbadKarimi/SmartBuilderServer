const mongoose = require("mongoose");

const proAcceptedProposalModel = mongoose.model(
    "proAcceptedProposalModels",//------> like table name
    mongoose.Schema(
      {
        senderEmail:String,
        accepterEmail:String,
        projectStatus:String,
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
        proposalAcceptedTime:String,
        proposalAcceptedDate:String,
        ownerFirstName:String,
        ownerLastName:String,
        ownerCity:String,
        ownerCountry:String,
        ownerProfilePicUrl:String,
        proFirstName:String,
        proLastName:String,
        proCity:String,
        proCountry:String,
        proProfilePicUrl:String,
      
      // selectedContractorCity:String,
        
    
      },
      { timestamps: true },
    
    )
  );

  module.exports = {

    proAcceptedProposalModel
  };