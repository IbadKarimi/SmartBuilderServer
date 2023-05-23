const {adminModel } = require("../models/admin.model");


async function createAdminProfile(params, callback) { //params ke ander models argument pass horaha hai params=models
    if (!params.firstName) {
      return callback(
        {
          message: "First Name is Required",
        },
        ""
      );
    }
  
    const adminModels  = new adminModel(params); //create object of product model params=model passing data in data base here
    adminModels 
      .save()
      .then((response) => {
        return callback(null, response);
      })
      .catch((error) => {
        return callback(error);
      });
  }
  async function getAdminProfile(params, callback) {
    const firstName = params.firstName;
    var condition = firstName
      ? { firstName: { $regex: new RegExp(firstName), $options: "i" } }
      : {};
  
      adminModel 
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
  
   adminModel 
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
  
    adminModel 
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
    createAdminProfile,
    getAdminProfile,
    updateProfilePhotos,
    updateCoverPhotos,
   
  

   
  };