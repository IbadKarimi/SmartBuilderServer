const ownerProfileServices = require("../services/owner_profile_services");
//create object of product services post get data
const upload = require("../middleware/upload.js");

// Create and Save a new Product
exports.create = (req, res, next) => {
  upload(req, res, function (err) {
    if (err) {
      next(err);
    } else {
      const urlUploadPhoto = req.protocol + "://" + req.get("host");

      const pathUploadPhoto =  req.files['uploadPhoto'][0].path.replace(/\\/g, '/');
       // req.file != undefined ? req.file.path.replace(/\\/g, "/") : "";// if user not upload any image then save null value in data base

        const urlUploadCinicPhoto = req.protocol + "://" + req.get("host");

      const pathUploadCnicPhoto =req.files['uploadCnicPhoto'][0].path.replace(/\\/g, '/');
       // req.file != undefined ? req.file.path.replace(/\\/g, "/") : "";
        

      var model = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        occupation:req.body.occupation,
        country: req.body.country,
        city: req.body.city,
        zipPostalCode:req.body.zipPostalCode,
        streetAddress: req.body.streetAddress,
        phoneNo: req.body.phoneNo,
        cnicNo: req.body.cnicNo,
        ntnNo: req.body.ntnNo,
        uploadPhoto: pathUploadPhoto != "" ? urlUploadPhoto + "/" + pathUploadPhoto : "",
        uploadCnicPhoto: pathUploadCnicPhoto != "" ? urlUploadCinicPhoto + "/" + pathUploadCnicPhoto : "",
        timeNow: req.body.timeNow,

      };

      ownerProfileServices.createOwnerProfile(model, (error, results) => {
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
//-------------------------------------------Owner About---------------//
exports.ownerProfileAbout = (req, res, next) => {
  upload(req, res, function (err) {
    if (err) {
      next(err);
    } else {
      
      var model = {
        
        email: req.body.email,
        about: req.body.about,
       
      
      };
      ownerProfileServices._ownerProfileAboutServices(model, (error, results) => {
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
//-----------------------------------create cover photo and email----------//
exports.createCoverPhotoEmail = (req, res, next) => {
  upload(req, res, function (err) {
    if (err) {
      next(err);
    } else {
      const urlUploadCoverPhoto = req.protocol + "://" + req.get("host");
      const pathUploadCoverPhoto =  req.files['uploadCoverPhoto'][0].path.replace(/\\/g, '/');
      

      var model = {
      
        email: req.body.email,
        uploadCoverPhoto: pathUploadCoverPhoto != "" ? urlUploadCoverPhoto + "/" + pathUploadCoverPhoto : "",
       
      };

      ownerProfileServices.createOwnerCoverEmail(model, (error, results) => {
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
//-----------------------------------------------------------------------//
//---------------------------------createSignUp---------------------//

// Retrieve all Products from the database.
exports.findAll = (req, res, next) => {
  var model = {
  firstName: req.query.firstName,
  };

  ownerProfileServices.getOwnerProfile(model, (error, results) => {//-----------------services class
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "Success",
      data: results,
    });
  });
};
exports.findAllAbouts = (req, res, next) => {
  var model = {
  email: req.query.email,
  };

  ownerProfileServices.getOwnerProfileAbout(model, (error, results) => {//-----------------services class
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "Success",
      data: results,
    });
  });
};

//----------------------------------------------------------------------------------------------//
exports.findAllCoverPhotoEmail = (req, res, next) => {
  var model = {
  email: req.query.email,
  };

  ownerProfileServices.getOwnerCoverPhotoEmail(model, (error, results) => {//-----------------services class
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "Success",
      data: results,
    });
  });
};
//------------------------------------------------------------------------------------------//
exports.updateCoverPhotoEmail = (req, res, next) => {
  upload(req, res, function (err) {
    if (err) {
      next(err);
    } else {
      const url = req.protocol + "://" + req.get("host");

      const path =
      req.files['uploadCoverPhoto'][0].path.replace(/\\/g, '/');

      var model = {
        userId: req.params.id,
        email: req.body.email,
        uploadCoverPhoto: path != "" ? url + "/" + path : "",
      };

      console.log(model);

      ownerProfileServices.updateCoverPhotoEmailServices(model, (error, results) => {
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
exports.updateProfilePhoto = (req, res, next) => {
  upload(req, res, function (err) {
    if (err) {
      next(err);
    } else {
      const url = req.protocol + "://" + req.get("host");

      const path =
      req.files['uploadPhoto'][0].path.replace(/\\/g, '/');

      var model = {
        userId: req.params.id,
        uploadPhoto: path != "" ? url + "/" + path : "",
      };

      console.log(model);

      ownerProfileServices.updateProfilePhotoServices(model, (error, results) => {
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
exports.AboutfindOne = (req, res, next) => {
  var model = {
    ownerEmail: req.params.ownerEmail,
  };

  ownerProfileServices.getAboutByEmail(model, (error, results) => {
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "Success",
      data: results,
    });
  });
};



