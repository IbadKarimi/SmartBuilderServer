const mongoose = require("mongoose");

const ProfessionalWorkExperience = mongoose.model(
    "ProfessionalWorkExperiences",//------> like table name
    mongoose.Schema(
      {
       
        email:String,
        title:String,
        companyName:String,
        experience:String,
      
      },
      { timestamps: true }
    )
  );

  module.exports = {

    ProfessionalWorkExperience,
  };