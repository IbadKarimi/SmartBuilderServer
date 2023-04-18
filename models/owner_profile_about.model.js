const mongoose = require("mongoose");

const ownerProfileAboutModels = mongoose.model(
    "ownerProfileAboutModels",//------> like table name
    mongoose.Schema(
      {
       
       email:String,
       about:String,
       
      
      },
      { timestamps: true }
    )
  );

  module.exports = {

    ownerProfileAboutModels,
  };