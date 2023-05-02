
const {proProfileCoverPhotoModel} = require("../models/pro_profile_coverPhoto.model");
 
async function createProCoverEmail(params, callback) { //params ke ander models argument pass horaha hai params=models
    if (!params.email) {
      return callback(
        {
          message: "Email is Required",
        },
        ""
      );
    }
  
    const proProfileModel = new proProfileCoverPhotoModel(params); //create object of product model params=model passing data in data base here
    proProfileModel
      .save()
      .then((response) => {
        return callback(null, response);
      })
      .catch((error) => {
        return callback(error);
      });
  }
  async function getProCoverPhotoEmail(params, callback) {
    const email = params.email;
    var condition = email
      ? { email: { $regex: new RegExp(email), $options: "i" } }
      : {};
  
      proProfileCoverPhotoModel
      .find(condition)
      .then((response) => {
        return callback(null, response);
      })
      .catch((error) => {
        return callback(error);
      });
  }

  module.exports = {
    createProCoverEmail,
    getProCoverPhotoEmail,
  };