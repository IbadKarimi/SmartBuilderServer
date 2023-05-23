const mongoose = require("mongoose");

const retailerProfileModel = mongoose.model(
    "retailerProfileModels",//------> like table name
    mongoose.Schema(
      {
        email:String,

        firstName: String,

        lastName: String,
      
        shopName:String,
       
        country: String,
        
        city: String,
      
        phoneNo:String,
       
        profilePhoto:String,

        coverPhoto:String,

        storeAddress:String,

        latitude:String,

        longitude:String,

   
        
      },
      { timestamps: true }
    )
  );

  module.exports = {

    retailerProfileModel,
  };