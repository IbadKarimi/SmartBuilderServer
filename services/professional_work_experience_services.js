const { ProfessionalWorkExperience } = require("../models/professional_work_experience.model");


//------------------------_createSignUp----------------------------------------//
async function InsertProfessionalWorkExperience(params, callback) { //params ke ander models argument pass horaha hai params=models
    if (!params.email) {
      return callback(
        {
          message: "Email is Required",
        },
        ""
      );
    }
  
    const ProfessionalWorkExperienceModel = new ProfessionalWorkExperience(params); //create object of product model params=model
    ProfessionalWorkExperienceModel
      .save()
      .then((response) => {
        return callback(null, response);
      })
      .catch((error) => {
        return callback(error);
      });
  }
  
  //----------------------------------------------------------------------------//
  async function GetProfessionalWorkExperience(params, callback) {
    const firstName = params.email;
    var condition = firstName
      ? { email: { $regex: new RegExp(email), $options: "i" } }
      : {};
  
    ProfessionalWorkExperience
      .find(condition)
      .then((response) => {
        return callback(null, response);
      })
      .catch((error) => {
        return callback(error);
      });
  }

  module.exports = {
  InsertProfessionalWorkExperience,
  GetProfessionalWorkExperience,
  
   
  };