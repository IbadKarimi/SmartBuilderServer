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

      const pathUploadPhoto =
        req.file != undefined ? req.file.path.replace(/\\/g, "/") : "";

        const urlUploadCinicPhoto = req.protocol + "://" + req.get("host");

      const pathUploadCnicPhoto =
        req.file != undefined ? req.file.path.replace(/\\/g, "/") : "";

      var model = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        country: req.body.country,
        city: req.body.city,
        zipPostalCode:req.body.zipPostalCode,
        streetAddress: req.body.streetAddress,
        phoneNo: req.body.phoneNo,
        cnicNo: req.body.cnicNo,
        ntnNo: req.body.ntnNo,
        uploadPhoto: pathUploadPhoto != "" ? urlUploadPhoto + "/" + pathUploadPhoto : "",
        uploadCnicPhoto: pathUploadCnicPhoto != "" ? urlUploadCinicPhoto + "/" + pathUploadCnicPhoto : "",
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