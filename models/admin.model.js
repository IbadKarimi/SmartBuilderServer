const mongoose = require("mongoose");

const adminModel = mongoose.model(
    "adminModels",//------> like table name
    mongoose.Schema(
      {
        email:String,

        firstName: String,

        lastName: String,
      
      
       
        country: String,
        
        city: String,
      
        phoneNo:String,
       
        profilePhoto:String,

        coverPhoto:String,

      
   
        
      },
      { timestamps: true }
    )
  );

  module.exports = {

    adminModel
  };