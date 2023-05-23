const {retailerProfileModel } = require("../models/retailer_profile.model");


async function createRetailerProfile(params, callback) { //params ke ander models argument pass horaha hai params=models
    if (!params.firstName) {
      return callback(
        {
          message: "First Name is Required",
        },
        ""
      );
    }
  
    const RetailerProfileModes = new retailerProfileModel(params); //create object of product model params=model passing data in data base here
    RetailerProfileModes
      .save()
      .then((response) => {
        return callback(null, response);
      })
      .catch((error) => {
        return callback(error);
      });
  }
  async function getRetailerProfile(params, callback) {
    const firstName = params.firstName;
    var condition = firstName
      ? { firstName: { $regex: new RegExp(firstName), $options: "i" } }
      : {};
  
      retailerProfileModel
      .find(condition)
      .then((response) => {
        return callback(null, response);
      })
      .catch((error) => {
        return callback(error);
      });
  }

  async function updateProfilePhotos(params, callback) {
    const userId = params.userId;
  
    retailerProfileModel
      .findByIdAndUpdate(userId, params, { useFindAndModify: false })
      .then((response) => {
        if (!response) callback(`Cannot update Tutorial with id=${userId}. Maybe Tutorial was not found!`);
        else callback(null, response);
      })
      .catch((error) => {
        return callback(error);
      });
  }

  async function updateCoverPhotos(params, callback) {
    const userId = params.userId;
  
    retailerProfileModel
      .findByIdAndUpdate(userId, params, { useFindAndModify: false })
      .then((response) => {
        if (!response) callback(`Cannot update Tutorial with id=${userId}. Maybe Tutorial was not found!`);
        else callback(null, response);
      })
      .catch((error) => {
        return callback(error);
      });
  }

  async function updateStoreAddress(params, callback) {
    const userId = params.userId;
  
    retailerProfileModel
      .findByIdAndUpdate(userId, params, { useFindAndModify: false })
      .then((response) => {
        if (!response) callback(`Cannot update Tutorial with id=${userId}. Maybe Tutorial was not found!`);
        else callback(null, response);
      })
      .catch((error) => {
        return callback(error);
      });
  }



  module.exports = {
    createRetailerProfile,
    getRetailerProfile,
    updateProfilePhotos,
    updateCoverPhotos,
    updateStoreAddress,
  

   
  };