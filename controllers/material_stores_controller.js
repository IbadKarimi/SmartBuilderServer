const materialRateListServices = require("../services/material_stores_service");
//create object of product services post get data
const upload = require("../middleware/upload.js");

// Create and Save a new Product
exports.create = (req, res, next) => {
  upload(req, res, function (err) {
    if (err) {
      next(err);
    } else {
    
       // req.file != undefined ? req.file.path.replace(/\\/g, "/") : "";// if user not upload any image then save null value in data base

       
       var model = {
        
          email: req.body.email,

          materialName: req.body.materialName,
          
          amount: req.body.amount,
   
          unit:req.body.unit,

          date: req.body.date,
    
        
          
  
        };
       
      

       materialRateListServices.AddMaterialRates(model, (error, results) => {
        if (error) {
          return next(error);
        }
        return res.status(200).send({
          message: "Success",
          data: results,
        });
      });
    }
  });
};

exports.findAll = (req, res, next) => {
  var model = {
  email: req.query.email,
  };

  materialRateListServices.getMaterialRates(model, (error, results) => {//-----------------services class
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "Success",
      data: results,
    });
  });
};








exports.delete = (req, res, next) => {
  var model = {
    id: req.params.id,
  };

  materialRateListServices.deleteMaterialRate(model, (error, results) => {
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "Success",
      data: results,
    });
  });
};
