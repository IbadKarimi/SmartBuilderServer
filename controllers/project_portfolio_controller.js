const projectPortfolioServices = require("../services/project_portfolio_service");
//create object of product services post get data
const upload = require("../middleware/upload.js");

// Create and Save a new Product
exports.create = (req, res, next) => {
  upload(req, res, function (err) {
    if (err) {
      next(err);
    } else {
      const urlhousePhoto = req.protocol + "://" + req.get("host");

      const pathhousePhoto =  req.files['housePhoto'][0].path.replace(/\\/g, '/');

      const urlProfilePhoto = req.protocol + "://" + req.get("host");

      const pathProfilePhoto =  req.files['profilePhoto'][0].path.replace(/\\/g, '/');
  

    

      var model = {
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        country: req.body.country,
        city: req.body.city,
        address:req.body.address,
        projectTitle:req.body.projectTitle,
        construct:req.body.construct,
        housePhoto: pathhousePhoto != "" ? urlhousePhoto+ "/" + pathhousePhoto : "",
        profilePhoto: pathProfilePhoto!= "" ? urlProfilePhoto+ "/" + pathProfilePhoto : "",
        

      };

      projectPortfolioServices.createProjectPortfolio(model, (error, results) => {
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
    firstName: req.query.firstName,
    };
  
    projectPortfolioServices.getProjectPortfolio(model, (error, results) => {//-----------------services class
      if (error) {
        return next(error);
      }
      return res.status(200).send({
        message: "Success",
        data: results,
      });
    });
  };