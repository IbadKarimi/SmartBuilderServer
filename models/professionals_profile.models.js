const mongoose = require("mongoose");

const professionalsProfile = mongoose.model(
    "professionalsProfiles",//------> like table name
    mongoose.Schema(
      {
        firstName: String,
        lastName: String,
        email:String,
        title:String,
        companyName:String,
        country: String,
        city: String,
        zipPostalCode:String,
        streetAddress:String,
        phoneNo:String,
        cnicNo:String,
        ntnNo:String,
        permitNo:String,
        licenseNo:String,
        uploadPhoto:String,
        uploadCnicPhoto:String,
        timeNow:String,
      },
      { timestamps: true }
    )
  );

  module.exports = {

    professionalsProfile,
  };