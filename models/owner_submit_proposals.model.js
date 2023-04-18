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
        plotLengthA: String,
        plotLengthB: String,
        plotWidthA: String,
        plotWidthB: String,
        actualPlotSize: String,
        floors: String,
        city: String,
        plotLocation: String,
        describeYourProject:String,
        projectFile:String,
        proposalCreatedTime:String,
        proposalSavedDate:String,
        counter:String,
      
      },
      { timestamps: true }
    )
  );

  module.exports = {

    ownerSubmitProposalsModels
  };