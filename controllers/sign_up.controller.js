const upload = require("../middleware/upload.js");

const signUpServices = require("../services/sign_up_services");
exports.createSignUp = (req, res, next) => {
    upload(req, res, function (err) {
      if (err) {
        next(err);
      } else {
        const url = req.protocol + "://" + req.get("host");
  
        const path =
          req.file != undefined ? req.file.path.replace(/\\/g, "/") : "";
  
        var model = {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: req.body.password,
          country: req.body.country,
        
        };
  
        signUpServices._createSignUp(model, (error, results) => {
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