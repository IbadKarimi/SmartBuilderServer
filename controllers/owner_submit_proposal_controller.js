
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
  
          };
          // do something with the path...
        } else {
           const path ="";
           const url = req.protocol + "://" + req.get("host");
           model = {
            email:req.body.email,
            to:req.body.to,
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