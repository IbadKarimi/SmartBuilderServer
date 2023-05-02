
const proCoverPhotoServices = require("../services/pro_profile_coverPhoto.services");
const upload = require("../middleware/upload.js");

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

      proCoverPhotoServices.createProCoverEmail(model, (error, results) => {
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



exports.findAllCoverPhotoEmail = (req, res, next) => {
  var model = {
  email: req.query.email,
  };

  proCoverPhotoServices.getProCoverPhotoEmail(model, (error, results) => {//-----------------services class
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "Success",
      data: results,
    });
  });
};