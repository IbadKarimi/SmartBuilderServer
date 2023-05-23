const mongoose = require("mongoose");

const projectPortfolioModel = mongoose.model(
    "projectPortfolioModels",//------> like table name
    mongoose.Schema(
      {
        email:String,
        firstName: String,
        lastName: String,
        country: String,
        city: String,
        projectTitle:String,
   
        address:String,
        housePhoto:String,
        construct:String,
        profilePhoto:String,
       

   
        
      },
      { timestamps: true }
    )
  );

  module.exports = {

    projectPortfolioModel ,
  };