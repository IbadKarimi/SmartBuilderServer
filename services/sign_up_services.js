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

  module.exports = {
    _createSignUp,
   
  };