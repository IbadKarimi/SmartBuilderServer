const proAcceptedProposalsServices = require("../services/pro_accepted_requested_proposal_services");

const upload = require("../middleware/upload.js");

exports.createAcceptedProposal= (req, res, next) => {
    upload(req, res, function (err) {
      if (err) {
        next(err);
      } else {
      
  
        var model = {
          
            
            projectStatus:req.body.projectStatus,
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
            projectFile: req.body.projectFile,
            proposalAcceptedTime:req.body.proposalAcceptedTime,
            proposalAcceptedDate:req.body.proposalAcceptedDate,
            
            ownerFirstName:req.body.ownerFirstName,
            ownerLastName:req.body.ownerLastName,
            ownerCity:req.body.ownerCity,
            ownerCountry:req.body.ownerCountry,
            ownerProfilePicUrl:req.body.ownerProfilePicUrl,
            senderEmail:req.body.senderEmail,
            
            proFirstName:req.body.proFirstName,
            proLastName:req.body.proLastName,
            proCity:req.body.proCity,
            proCountry:req.body.proCountry,
            proProfilePicUrl:req.body.proProfilePicUrl,
            accepterEmail:req.body.accepterEmail,

            offer:re
            
         
        };
       
  
        proAcceptedProposalsServices.proAcceptProposals(model, (error, results) => {
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
  exports.findAllAcceptedProposal = (req, res, next) => {
    var model = {
      email: req.query.email,
    };
  
    proAcceptedProposalsServices.getProAcceptProposal(model, (error, results) => {
      if (error) {
        return next(error);
      }
      return res.status(200).send({
        message: "Success",
        data: results,
      });
    });
  };