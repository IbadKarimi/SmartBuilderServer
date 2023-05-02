const mongoose = require("mongoose");

const ProfessionalSkills = mongoose.model(
    "ProfessionalSkills ",//------> like table name
    mongoose.Schema(
      {
       
        email:String,
        skills:String,
      
      
      },
      { timestamps: true }
    )
  );

  module.exports = {

    ProfessionalSkills ,
  };