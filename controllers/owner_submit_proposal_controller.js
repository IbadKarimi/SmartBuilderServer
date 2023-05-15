
const ownerSubmitProposalsServices = require("../services/owner_submit_proposals_service");


const upload = require("../middleware/upload.js");
exports.create = (req, res, next) => {
    upload(req, res, function (err) {
      if (err) {
        next(err);
      } else {
        var model ;
        if (req.files && req.files['projectFile'] && req.files['projectFile'][0]) {
          const path = req.files['projectFile'][0].path.replace(/\\/g, '/');
          const url = req.protocol + "://" + req.get("host");
          model = {
            email:req.body.email,
            to:req.body.to,
            status:req.body.status== undefined ? "" :req.body.status,
            projectTitle: req.body.projectTitle,
            projectType: req.body.projectType,
            workMonths:req.body.workMonths,
            workLength:req.body.workLength,
            projectBudget:req.body.projectBudget,
            plotLengthA:req.body.plotLengthA,
            plotLengthB:req.body.plotLengthB,
            plotWidthA:req.body.plotWidthA,
            plotWidthB:req.body.plotWidthB,
            actualPlotSize:req.body.actualPlotSize,
            floors:req.body.floors,
            city:req.body.city,
            plotLocation:req.body.plot,
            groundFloor:req.body.groundFloor,
            describeYourProject:req.body.describeYourProject,
            projectFile: path != "" ? url + "/" + path : "",
            proposalCreatedTime:req.body.proposalCreatedTime,
            proposalSavedDate:req.body.proposalSavedDate,
            ownerFirstName:req.body.ownerFirstName,
            ownerLastName:req.body.ownerLastName,
            ownerCity:req.body.ownerCity,
            ownerCountry:req.body.ownerCountry,
            ownerProfilePicUrl:req.body.ownerProfilePicUrl,
            selectedContractorCity:req.body.selectedContractorCity,


            proFirstName:req.body.proFirstName== undefined ? "" :req.body.proFirstName,
            proLastName:req.body.proLastName== undefined ? "" :req.body.proLastName,
            proCity:req.body.proCity== undefined ? "" :req.body.proCity,
            proCountry:req.body.proCountry== undefined ? "" :req.body.proCountry,
            proProfilePicUrl:req.body.proProfilePicUrl== undefined ? "" :req.body.proProfilePicUrl,
            proEmail:req.body.proEmail== undefined ? "" :req.body.proEmail,
  
          };
          // do something with the path...
        } else {
           const path ="";
           const url = req.protocol + "://" + req.get("host");
           model = {
            email:req.body.email,
            to:req.body.to,
            status:req.body.status== undefined ? "" :req.body.status,
            projectTitle: req.body.projectTitle,
            projectType: req.body.projectType,
            workMonths:req.body.workMonths,
            workLength:req.body.workLength,
            projectBudget:req.body.projectBudget,
            plotLengthA:req.body.plotLengthA,
            plotLengthB:req.body.plotLengthB,
            plotWidthA:req.body.plotWidthA,
            plotWidthB:req.body.plotWidthB,
            actualPlotSize:req.body.actualPlotSize,
            floors:req.body.floors,
            city:req.body.city,
            groundFloor:req.body.groundFloor,
            plotLocation:req.body.plotLocation,
            describeYourProject:req.body.describeYourProject,
            projectFile: path != "" ? url + "/" + path : "",
            proposalCreatedTime:req.body.proposalCreatedTime,
            proposalSavedDate:req.body.proposalSavedDate,
            ownerFirstName:req.body.ownerFirstName,
            ownerLastName:req.body.ownerLastName,
            ownerCity:req.body.ownerCity,
            ownerCountry:req.body.ownerCountry,
            ownerProfilePicUrl:req.body.ownerProfilePicUrl,
            selectedContractorCity:req.body.selectedContractorCity,

            proFirstName:req.body.proFirstName== undefined ? "" :req.body.proFirstName,
            proLastName:req.body.proLastName== undefined ? "" :req.body.proLastName,
            proCity:req.body.proCity== undefined ? "" :req.body.proCity,
            proCountry:req.body.proCountry== undefined ? "" :req.body.proCountry,
            proProfilePicUrl:req.body.proProfilePicUrl== undefined ? "" :req.body.proProfilePicUrl,
            proEmail:req.body.proEmail== undefined ? "" :req.body.proEmail,
          
  
          };
        }

       
       
        ownerSubmitProposalsServices.ownerSubmitProposals(model, (error, results) => {
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
    email: req.query.email,
    };
  
    ownerSubmitProposalsServices.getOwnerSubmitProposals(model, (error, results) => {//-----------------services class
      if (error) {
        return next(error);
      }
      return res.status(200).send({
        message: "Success",
        data: results,
      });
    });
  };


  exports.updateStatus = (req, res, next) => {
    upload(req, res, function (err) {
      if (err) {
        next(err);
      } else {
       
  
        var model = {
          userId: req.params.id,
          status:req.body.status,
          proFirstName:req.body.proFirstName,
          proLastName:req.body.proLastName,
          proCity:req.body.proCity,
          proCountry:req.body.proCountry,
          proProfilePicUrl:req.body.proProfilePicUrl,
          proEmail:req.body.proEmail,
          proposalAcceptedTime:req.body.proposalAcceptedTime,
          proposalAcceptedDate:req.body.proposalAccceptedDate,
          
        };
  
        console.log(model);
  
        ownerSubmitProposalsServices.updateStatusServices(model, (error, results) => {
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