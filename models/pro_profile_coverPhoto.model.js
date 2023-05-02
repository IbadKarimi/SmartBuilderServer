const mongoose = require("mongoose");

const proProfileCoverPhotoModel = mongoose.model(
    "proProfileCoverPhotoModels",//------> like table name
    mongoose.Schema(
      {
       
        email:String,
        uploadCoverPhoto:String,
      
      },
      { timestamps: true }
    )
  );

  module.exports = {

    proProfileCoverPhotoModel,
  };