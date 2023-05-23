const offerProposalServices = require("../services/offer_proposal_service");


const upload = require("../middleware/upload.js");


exports.create = (req, res, next) => {
    upload(req, res, function (err) {
      if (err) {
        next(err);
      } else {
        
          
  
        var model = {
          proposalId:req.body.proposalId,
          proEmail: req.body.proEmail,
          proFirstName: req.body.proFirstName,
          proLastName: req.body.proLastName,
          proCity: req.body.proCity,
          proCountry: req.body.proCountry,
          proProfilePicUrl:req.body.proProfilePicUrl,
          offer:req.body.offer,
          offerCreatedTime:req.body.offerCreatedTime,
          offerSavedDate:req.body.offerSavedDate,
          offerStatus:req.body.offerStatus,
          projectTitle:req.body.projectTitle,
          ownerEmail:req.body.ownerEmail,
         
          offerAcceptedTime:req.body.offerAcceptedTime== undefined ? "" :req.body.offerAcceptedTime,
          offerAcceptedDate:req.body.offerAcceptedDate== undefined ? "" :req.body.offerAcceptedDate,
         
  
        };
  
        offerProposalServices.offerProposals(model, (error, results) => {
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
    proEmail: req.query.proEmail,
    };
  
    offerProposalServices.getOfferProposal(model, (error, results) => {//-----------------services class
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
          offerStatus:req.body.offerStatus,
          
          offerAcceptedDate:req.body.offerAcceptedDate,
          offerAcceptedTime:req.body.offerAcceptedTime,
          
        };
  
        console.log(model);
  
        offerProposalServices.updateOfferStatus(model, (error, results) => {
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