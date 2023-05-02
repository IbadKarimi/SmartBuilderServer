const upload = require("../middleware/upload.js");

const ProfessionalWorkExperienceServices = require("../services/professional_work_experience_services");

exports.createProfessioanlWorkExperience = (req, res, next) => {
    upload(req, res, function (err) {
      if (err) {
        next(err);
      } else {
        const url = req.protocol + "://" + req.get("host");
  
        const path =
          req.file != undefined ? req.file.path.replace(/\\/g, "/") : "";
  
        var model = {
          
          email: req.body.email,
          title: req.body.title,
          companyName: req.body.companyName,
          experience: req.body.experience,
         
        };
  
        ProfessionalWorkExperienceServices.InsertProfessionalWorkExperience(model, (error, results) => {
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
  exports.findAllWorkExpereince = (req, res, next) => {
    var model = {
      firstName: req.query.firstName,
    };
  
    ProfessionalWorkExperienceServices.GetProfessionalWorkExperience(model, (error, results) => {
      if (error) {
        return next(error);
      }
      return res.status(200).send({
        message: "Success",
        data: results,
      });
    });
  };