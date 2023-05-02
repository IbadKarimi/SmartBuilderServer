const {ProfessionalSkills } = require("../models/professionals_skills.model");



async function InsertProfessionalsSkills(params, callback) { //params ke ander models argument pass horaha hai params=models
    if (!params.email) {
      return callback(
        {
          message: "Email is Required",
        },
        ""
      );
    }
  
    const ProfessionalSkillsModel = new ProfessionalSkills(params); //create object of product model params=model
    ProfessionalSkillsModel
      .save()
      .then((response) => {
        return callback(null, response);
      })
      .catch((error) => {
        return callback(error);
      });
  }
  
  //----------------------------------------------------------------------------//
  async function GetProfessionalSkills(params, callback) {
    const email = params.email;
    var condition = email
      ? { email: { $regex: new RegExp(email), $options: "i" } }
      : {};
  
      ProfessionalSkills
      .find(condition)
      .then((response) => {
        return callback(null, response);
      })
      .catch((error) => {
        return callback(error);
      });
  }

  module.exports = {
  InsertProfessionalsSkills,
  GetProfessionalSkills,
  
   
  };