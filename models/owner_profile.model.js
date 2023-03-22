const mongoose = require("mongoose");

const ownerProfile = mongoose.model(
    "ownerProfiles",//------> like table name
    mongoose.Schema(
      {
        firstName: String,
        lastName: String,
        country: String,
        city: String,
        zipPostalCode:String,
        streetAddress:String,
        phoneNo:String,
        cnicNo:String,
        ntnNo:String,
        uploadPhoto:String,
        uploadCnicPhoto:String,
      },
      { timestamps: true }
    )
  );

  module.exports = {

    ownerProfile,
  };