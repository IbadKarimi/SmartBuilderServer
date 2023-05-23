const adminProfileServices = require("../services/admin_service");
//create object of product services post get data
const upload = require("../middleware/upload.js");

// Create and Save a new Product
exports.create = (req, res, next) => {
  upload(req, res, function (err) {
    if (err) {
      next(err);
    } else {
    
       // req.file != undefined ? req.file.path.replace(/\\/g, "/") : "";// if user not upload any image then save null value in data base



      var model;
       // req.file != undefined ? req.file.path.replace(/\\/g, "/") : "";
       if (req.files && req.files['profilePhoto'] && req.files['profilePhoto'][0] ) {
       

        const urlProfilePhoto = req.protocol + "://" + req.get("host");
        const pathProfilePhoto =  req.files['profilePhoto'][0].path.replace(/\\/g, '/');

      
        const pathCoverPhoto ="";
           const urlCoverPhoto = req.protocol + "://" + req.get("host");
      
       model = {
        
          email: req.body.email,

          firstName: req.body.firstName,
          
          lastName: req.body.lastName,
   
      
          country: req.body.country,
          city: req.body.city,

          phoneNo:req.body.phoneNo,
      
         
          profilePhoto: pathProfilePhoto != "" ? urlProfilePhoto + "/" + pathProfilePhoto : "",
          coverPhoto: pathCoverPhoto != "" ? urlCoverPhoto  + "/" + pathCoverPhoto : "",
     
         
        
        };
       }
       else{
    

        const pathCoverPhoto ="";
        const urlCoverPhoto = req.protocol + "://" + req.get("host");
        model = {
          email: req.body.email,

          firstName: req.body.firstName,
          
          lastName: req.body.lastName,
   
    
          country: req.body.country,
          city: req.body.city,
         
          phoneNo: req.body.phoneNo,

          profilePhoto: pathProfilePhoto  != "" ? urlProfilePhoto+ "/" + pathProfilePhoto  : "",

          coverPhoto: pathCoverPhoto != "" ? urlCoverPhoto  + "/" + pathCoverPhoto : "",

       
        
         
       
       }}
      
       

     

       adminProfileServices.createAdminProfile(model, (error, results) => {
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

  adminProfileServices.getAdminProfile(model, (error, results) => {//-----------------services class
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "Success",
      data: results,
    });
  });
};
exports.updateProfilePhoto = (req, res, next) => {
  upload(req, res, function (err) {
    if (err) {
      next(err);
    } else {
      const url = req.protocol + "://" + req.get("host");

      const path =
      req.files['profilePhoto'][0].path.replace(/\\/g, '/');

      var model = {
        userId: req.params.id,
        profilePhoto: path != "" ? url + "/" + path : "",
      };

      console.log(model);

      adminProfileServices.updateProfilePhotos(model, (error, results) => {
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






exports.updateCoverPhoto = (req, res, next) => {
  upload(req, res, function (err) {
    if (err) {
      next(err);
    } else {
     
      const url = req.protocol + "://" + req.get("host");

      const path =
      req.files['coverPhoto'][0].path.replace(/\\/g, '/');

      var model = {
        userId: req.params.id,
        coverPhoto: path != "" ? url + "/" + path : "",
      };


      console.log(model);

      adminProfileServices.updateCoverPhotos(model, (error, results) => {
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









