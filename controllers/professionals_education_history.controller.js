const professionalsEducationHistoryServices = require("../services/professionals_education_history_service");

const upload = require("../middleware/upload.js");



exports.createProfessioanalsEducationHistory= (req, res, next) => {
    upload(req, res, function (err) {
      if (err) {
        next(err);
      } else {
        const url = req.protocol + "://" + req.get("host");
  
        const path =
          req.file != undefined ? req.file.path.replace(/\\/g, "/") : "";
  
        var model = {
          
          email: req.body.email,
          school: req.body.school,
          qualification: req.body.qualification,
          startYear: req.body.startYear,
          endYear: req.body.endYear,
         
        };
  
        professionalsEducationHistoryServices.InsertProfessionalsEducationHistory(model, (error, results) => {
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
  //--------------------------------------------------------------------//
  exports.findAllEducationHistory = (req, res, next) => {
    var model = {
      firstName: req.query.firstName,
    };
  
    professionalsEducationHistoryServices.GetProfessionalEducationHistory(model, (error, results) => {
      if (error) {
        return next(error);
      }
      return res.status(200).send({
        message: "Success",
        data: results,
      });
    });
  };