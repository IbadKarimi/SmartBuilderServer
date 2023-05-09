const mongoose = require("mongoose");

const ownerSubmitProposalsModels = mongoose.model(
    "ownerSubmitProposalsModels",//------> like table name
    mongoose.Schema(
      {
        email:String,
        to:String,
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
        
    
      },
      { timestamps: true },
    
    )
  );

  module.exports = {

    ownerSubmitProposalsModels
  };