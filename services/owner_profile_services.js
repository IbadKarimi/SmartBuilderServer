const {ownerProfile} = require("../models/owner_profile.model");
const {ownerProfileCoverPhotoModel} = require("../models/owner_profile_coverPhoto.model");
const {ownerProfileAboutModels} = require("../models/owner_profile_about.model");

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

  async function createOwnerCoverEmail(params, callback) { //params ke ander models argument pass horaha hai params=models
    if (!params.email) {
      return callback(
        {
          message: "Email is Required",
        },
        ""
      );
    }
  
    const ownerProfileModel = new ownerProfileCoverPhotoModel(params); //create object of product model params=model passing data in data base here
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
  async function getOwnerCoverPhotoEmail(params, callback) {
    const email = params.email;
    var condition = email
      ? { email: { $regex: new RegExp(email), $options: "i" } }
      : {};
  
      ownerProfileCoverPhotoModel
      .find(condition)
      .then((response) => {
        return callback(null, response);
      })
      .catch((error) => {
        return callback(error);
      });
  }
  
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
  async function getOwnerProfileAbout(params, callback) {
    const email = params.email;
    var condition = email
      ? { ownerEmail: { $regex: new RegExp(email), $options: "i" } }
      : {};
  
      ownerProfileAboutModels
      .find(condition)
      .then((response) => {
        return callback(null, response);
      })
      .catch((error) => {
        return callback(error);
      });
  }
  async function updateCoverPhotoEmailServices(params, callback) {
    const userId = params.userId;
  
    ownerProfileCoverPhotoModel
      .findByIdAndUpdate(userId, params, { useFindAndModify: false })
      .then((response) => {
        if (!response) callback(`Cannot update Tutorial with id=${userId}. Maybe Tutorial was not found!`);
        else callback(null, response);
      })
      .catch((error) => {
        return callback(error);
      });
  }
  
  async function updateProfilePhotoServices(params, callback) {
    const userId = params.userId;
  
    ownerProfile
      .findByIdAndUpdate(userId, params, { useFindAndModify: false })
      .then((response) => {
        if (!response) callback(`Cannot update Tutorial with id=${userId}. Maybe Tutorial was not found!`);
        else callback(null, response);
      })
      .catch((error) => {
        return callback(error);
      });
  }
  async function _ownerProfileAboutServices(params, callback) { //params ke ander models argument pass horaha hai params=models
    if (!params.email) {
      return callback(
        {
          message: "Email is Required",
        },
        ""
      );
    }
  
    const _ownerProfile = new ownerProfileAboutModels(params); //create object of product model params=model
    _ownerProfile
      .save()
      .then((response) => {
        return callback(null, response);
      })
      .catch((error) => {
        return callback(error);
      });
  }
  async function getAboutByEmail(params, callback) {
    const ownerEmail = params.ownerEmail;
  
    ownerProfileAboutModels
      .findOne(ownerEmail)
      .then((response) => {
        if (!response) callback("Not found Product with id " + productId);
        else callback(null, response);
      })
      .catch((error) => {
        return callback(error);
      });
  }
  module.exports = {
    createOwnerProfile,
    createOwnerCoverEmail,
    getOwnerCoverPhotoEmail,
    getOwnerProfile,
   updateCoverPhotoEmailServices,
   updateProfilePhotoServices,
   _ownerProfileAboutServices,
   getOwnerProfileAbout,
   getAboutByEmail,

   
  };