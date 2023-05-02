const mongoose = require("mongoose");

const ProfessionalEducationHistory = mongoose.model(
    "ProfessionalEducationHistorys",//------> like table name
    mongoose.Schema(
      {
       
        email:String,
        school:String,
        qualification:String,
        startYear:String,
        endYear:String,
      
      },
      { timestamps: true }
    )
  );

  module.exports = {

    ProfessionalEducationHistory,
  };