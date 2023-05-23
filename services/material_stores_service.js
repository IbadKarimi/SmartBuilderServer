

const {MaterialStoresModel} = require("../models/material_stores.model");


async function AddMaterialRates(params, callback) { //params ke ander models argument pass horaha hai params=models
    if (!params.email) {
      return callback(
        {
          message: "Email is Required",
        },
        ""
      );
    }
  
    const MaterialStoresModels= new MaterialStoresModel(params); //create object of product model params=model passing data in data base here
    MaterialStoresModels
      .save()
      .then((response) => {
        return callback(null, response);
      })
      .catch((error) => {
        return callback(error);
      });
  }


  async function getMaterialRates(params, callback) {
    const email = params.email;
    var condition = email
      ? { email: { $regex: new RegExp(email), $options: "i" } }
      : {};
  
      MaterialStoresModel
      .find(condition)
      .then((response) => {
        return callback(null, response);
      })
      .catch((error) => {
        return callback(error);
      });
  }

  
  async function deleteMaterialRate(params, callback) {
    const id = params.id;
  
    MaterialStoresModel
      .findByIdAndRemove(id)
      .then((response) => {
        if (!response) callback(`Cannot delete Product with id=${id}. Maybe Product was not found!`);
        else callback(null, response);
      })
      .catch((error) => {
        return callback(error);
      });
  }
  

  module.exports = {
    AddMaterialRates,
    getMaterialRates,

    deleteMaterialRate
   
  };