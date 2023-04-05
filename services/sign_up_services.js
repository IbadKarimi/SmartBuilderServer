const { signUp } = require("../models/sign_up.models");


//------------------------_createSignUp----------------------------------------//
async function _createSignUp(params, callback) { //params ke ander models argument pass horaha hai params=models
    if (!params.firstName) {
      return callback(
        {
          message: "First Name is Required",
        },
        ""
      );
    }
  
    const signUpModel = new signUp(params); //create object of product model params=model
    signUpModel
      .save()
      .then((response) => {
        return callback(null, response);
      })
      .catch((error) => {
        return callback(error);
      });
  }
  
  //----------------------------------------------------------------------------//
  async function getUsers(params, callback) {
    const firstName = params.firstName;
    var condition = firstName
      ? { firstName: { $regex: new RegExp(firstName), $options: "i" } }
      : {};
  
    signUp
      .find(condition)
      .then((response) => {
        return callback(null, response);
      })
      .catch((error) => {
        return callback(error);
      });
  }
  //------------------------findOne----------------------------------------------------------//
  async function getUserByEmail(params, callback) {
    const email = params.email;
  
    signUp
      .findOne(email)
      .then((response) => {
        if (!response) callback("Not found user with email " + email);
        else callback(null, response);
      })
      .catch((error) => {
        return callback(error);
      });
  }
 

  //---------------------------------Update-----------------------------------------------------//
  async function updateUser(params, callback) {
    const userId = params.userId;
  
    signUp
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
    _createSignUp,
    getUsers,
    getUserByEmail,
    updateUser,
   
  };