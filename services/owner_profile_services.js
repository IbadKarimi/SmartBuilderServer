const {ownerProfile} = require("../models/owner_profile.model");


//------------------------_createSignUp----------------------------------------//
async function createOwnerProfile(params, callback) { //params ke ander models argument pass horaha hai params=models
    if (!params.firstName) {
      return callback(
        {
          message: "First Name is Required",
        },
        ""
      );
    }
  
    const ownerProfileModel = new ownerProfile(params); //create object of product model params=model passing data in data base here
    ownerProfileModel
      .save()
      .then((response) => {
        return callback(null, response);
      })
      .catch((error) => {
        return callback(error);
      });
  }
  
  //----------------------------------------------------------------------------//
  async function getOwnerProfile(params, callback) {
    const firstName = params.firstName;
    var condition = firstName
      ? { firstName: { $regex: new RegExp(firstName), $options: "i" } }
      : {};
  
      ownerProfile
      .find(condition)
      .then((response) => {
        return callback(null, response);
      })
      .catch((error) => {
        return callback(error);
      });
  }

  module.exports = {
    createOwnerProfile,
    getOwnerProfile,
   
  };