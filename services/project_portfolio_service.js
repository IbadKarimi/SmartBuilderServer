
const {projectPortfolioModel} = require("../models/project_portfolio.model");



async function createProjectPortfolio(params, callback) { //params ke ander models argument pass horaha hai params=models
    if (!params.firstName) {
      return callback(
        {
          message: "First Name is Required",
        },
        ""
      );
    }
  
    const projectPortfolioModels= new projectPortfolioModel(params); //create object of product model params=model passing data in data base here
    projectPortfolioModels
      .save()
      .then((response) => {
        return callback(null, response);
      })
      .catch((error) => {
        return callback(error);
      });
  }

  async function getProjectPortfolio(params, callback) {
    const firstName = params.firstName;
    var condition = firstName
      ? { firstName: { $regex: new RegExp(firstName), $options: "i" } }
      : {};
  
      projectPortfolioModel
      .find(condition)
      .then((response) => {
        return callback(null, response);
      })
      .catch((error) => {
        return callback(error);
      });
  }



  module.exports = {
    createProjectPortfolio,
    getProjectPortfolio,
   
   
  };