const { ProfessionalEducationHistory } = require("../models/professionals_education_history.model");



async function InsertProfessionalsEducationHistory(params, callback) { //params ke ander models argument pass horaha hai params=models
    if (!params.email) {
      return callback(
        {
          message: "Email is Required",
        },
        ""
      );
    }
  
    const ProfessionalEducationHistoryModel = new ProfessionalEducationHistory(params); //create object of product model params=model
    ProfessionalEducationHistoryModel
      .save()
      .then((response) => {
        return callback(null, response);
      })
      .catch((error) => {
        return callback(error);
      });
  }
  
  //----------------------------------------------------------------------------//
  async function GetProfessionalEducationHistory(params, callback) {
    const email = params.email;
    var condition = email
      ? { email: { $regex: new RegExp(email), $options: "i" } }
      : {};
  
      ProfessionalEducationHistory
      .find(condition)
      .then((response) => {
        return callback(null, response);
      })
      .catch((error) => {
        return callback(error);
      });
  }

  module.exports = {
  InsertProfessionalsEducationHistory,
  GetProfessionalEducationHistory,
  
   
  };