const mongoose = require("mongoose");

const ownerProfileCoverPhotoModel = mongoose.model(
    "ownerProfileCoverPhotoModels",//------> like table name
    mongoose.Schema(
      {
       
        email:String,
        uploadCoverPhoto:String,
      
      },
      { timestamps: true }
    )
  );

  module.exports = {

    ownerProfileCoverPhotoModel,
  };