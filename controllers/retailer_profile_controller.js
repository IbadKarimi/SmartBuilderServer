const retailerProfileServices = require("../services/retailer_profile_service");
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
   
          shopName:req.body.shopName,
          country: req.body.country,
          city: req.body.city,

          phoneNo:req.body.phoneNo,
      
         
          profilePhoto: pathProfilePhoto != "" ? urlProfilePhoto + "/" + pathProfilePhoto : "",
          coverPhoto: pathCoverPhoto != "" ? urlCoverPhoto  + "/" + pathCoverPhoto : "",
     
          longitude:req.body.long== undefined ? "" :req.body.longitude,
          latitude:req.body.long== undefined ? "" :req.body.latitude,
          storeAddress:req.body.storeAddress== undefined ? "" :req.body.storeAddress,
        
        };
       }
       else{
    

        const pathCoverPhoto ="";
        const urlCoverPhoto = req.protocol + "://" + req.get("host");
        model = {
          email: req.body.email,

          firstName: req.body.firstName,
          
          lastName: req.body.lastName,
   
          shopName:req.body.shopName,
          country: req.body.country,
          city: req.body.city,
         
          phoneNo: req.body.phoneNo,

          profilePhoto: pathProfilePhoto  != "" ? urlProfilePhoto+ "/" + pathProfilePhoto  : "",

          coverPhoto: pathCoverPhoto != "" ? urlCoverPhoto  + "/" + pathCoverPhoto : "",

          longitude:req.body.long== undefined ? "" :req.body.longitude,
          latitude:req.body.long== undefined ? "" :req.body.latitude,
          storeAddress:req.body.storeAddress== undefined ? "" :req.body.storeAddress,
        
         
       
       }}
      
       

     

       retailerProfileServices.createRetailerProfile(model, (error, results) => {
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

  retailerProfileServices.getRetailerProfile(model, (error, results) => {//-----------------services class
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

      retailerProfileServices.updateProfilePhotos(model, (error, results) => {
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

      retailerProfileServices.updateCoverPhotos(model, (error, results) => {
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




exports.updateStoreAdrress = (req, res, next) => {
  upload(req, res, function (err) {
    if (err) {
      next(err);
    } else {
     

      var model = {
        userId: req.params.id,
        storeAddress:req.body.storeAddress,
        latitude:req.body.latitude,
        longitude:req.body.longitude,
      };

      console.log(model);

      retailerProfileServices.updateStoreAddress(model, (error, results) => {
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





