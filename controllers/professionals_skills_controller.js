const proSkillServices = require("../services/professionals_skills_service");

const upload = require("../middleware/upload.js");

exports.createProfessioanalsSkills= (req, res, next) => {
    upload(req, res, function (err) {
      if (err) {
        next(err);
      } else {
      
  
        var model = {
          
          email: req.body.email,
          skills: req.body.skills,
         
        };
  
        proSkillServices.InsertProfessionalsSkills(model, (error, results) => {
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
  exports.findAllSkills = (req, res, next) => {
    var model = {
      email: req.query.email,
    };
  
    proSkillServices.GetProfessionalSkills(model, (error, results) => {
      if (error) {
        return next(error);
      }
      return res.status(200).send({
        message: "Success",
        data: results,
      });
    });
  };