const productsController = require("../controllers/products.controller");

const signUpController = require("../controllers/sign_up.controller");

const ownerProfileController = require("../controllers/owner_profile_controller");

const ownerSubmitProposalController = require("../controllers/owner_submit_proposal_controller");

const professionalWorkExperienceController = require("../controllers/professionals_work_experience_controller");

const professionalsProfileController = require("../controllers/professionals_profile_controller");

const proCoverPhotoController = require("../controllers/pro_profile_cover_photo.controller");

const proEducationHistory = require("../controllers/professionals_education_history.controller");

const proSkillsController = require("../controllers/professionals_skills_controller");

const proAcceptedProposalController = require("../controllers/pro_accepted_proposal_controller");

const offerProposalController = require("../controllers/offer_proposal_controller");

const retailerProfileController = require("../controllers/retailer_profile_controller");

const materialStoresRateController = require("../controllers/material_stores_controller");

const adminController = require("../controllers/admin_controller");

const projectPortfolioController = require("../controllers/project_portfolio_controller");


const express = require("express");
const router = express.Router();

// Create a new Product
router.post("/SignUp", productsController.create);
//-----------------------------------------------------------//
router.post("/UserSignUp", signUpController.createSignUp);
router.get("/UserSignUp", signUpController.findAllUsers);

//----------------------------Owner About Apis------------------------------//
router.post("/OwnerProfileAbout", ownerProfileController.ownerProfileAbout);
router.get("/OwnerProfileAbout", ownerProfileController.findAllAbouts);
//------------------------Owner Profile----------------------//
router.post("/CreateOwnerProfile", ownerProfileController.create);

router.get("/GetOwnerProfile", ownerProfileController.findAll);
router.put("/OwnerProfile/:id", ownerProfileController.updateProfilePhoto);
//----------------------cover photo---------------------------------//
router.post("/OwnerProfileCoverPhoto", ownerProfileController.createCoverPhotoEmail);
router.get("/OwnerProfileCoverPhoto", ownerProfileController.findAllCoverPhotoEmail);
router.put("/CoverEmail/:id", ownerProfileController.updateCoverPhotoEmail);


//----------------------Owner Submit Proposal--------------------------------------//
router.post("/OwnerSubmitProposals", ownerSubmitProposalController.create);
router.get("/OwnerSubmitProposals", ownerSubmitProposalController.findAll);
router.put("/OwnerSubmitProposals/:id", ownerSubmitProposalController.updateStatus);
//---------------------------Propsals Offer------------------------------------------------//


router.post("/OfferProposals", offerProposalController.create );
router.get("/OfferProposals", offerProposalController.findAll);
router.put("/OfferProposals/:id",offerProposalController.updateStatus);

//---------------------------------------------------------------------------------//
// Retrieve all Products
router.get("/SignUp", productsController.findAll);

// Retrieve a single Product with id
router.get("/products/:id", productsController.findOne);
router.get("/OwnerProfileAbout/:email", ownerProfileController.AboutfindOne);

// Update a Product with id
router.put("/products/:id", productsController.update);

// // Delete a Product with id
router.delete("/products/:id", productsController.delete);

router.post('upload',async(req,res,next)=>{

    var realfile=Buffer.from(req.body.image,"base64");
    fs.watchFileSync(req.body.name,realfile,"utf9");
    console.log("APi is Correct");
    await res.send({message:"Upload Image in flutter"});
  });
  //------------------------------------Professionals Api---------------------------//
  router.post("/WorkExperinece", professionalWorkExperienceController.createProfessioanlWorkExperience);
  router.get("/WorkExperinece", professionalWorkExperienceController.findAllWorkExpereince);
  //-----------------------------------Professionals Profile Api--------------------//
  router.post("/ProfessionalsProfile", professionalsProfileController.create);
  router.get("/ProfessionalsProfile", professionalsProfileController.findAll);
  router.put("/ProfessionalsProfile/:id", professionalsProfileController.updateProProfilePhoto);

  //-------------------------------------Professionals Cover Photo----------------------//
router.post("/ProCoverPhoto", proCoverPhotoController.createCoverPhotoEmail);
router.get("/ProCoverPhoto", proCoverPhotoController.findAllCoverPhotoEmail);

//-----------------------------------------Professionals Education History--------------//
router.post("/EducationHistory", proEducationHistory.createProfessioanalsEducationHistory);
router.get("/EducationHistory", proEducationHistory.findAllEducationHistory);

//-----------------------------------------Professional Skills---------------------------------------------//
router.post("/ProfessionalsSkills", proSkillsController.createProfessioanalsSkills);
router.get("/ProfessionalsSkills", proSkillsController.findAllSkills);

router.put("/CoverEmail/:id", ownerProfileController.updateCoverPhotoEmail);

//-------------------------------------------------Professional Accepted Proposal---------------------------//
router.post("/AcceptedProposal",proAcceptedProposalController.createAcceptedProposal);
router.get("/AcceptedProposal", proAcceptedProposalController.findAllAcceptedProposal);

//-------------------------------------------------Retailer Profile---------------------------//
router.post("/RetailerProfile",retailerProfileController.create);
router.get("/RetailerProfile", retailerProfileController.findAll);
router.put("/RetailerProfile/:id", retailerProfileController.updateProfilePhoto);
router.put("/RetailerProfileCover/:id", retailerProfileController.updateCoverPhoto);
router.put("/RetailerProfileUpdateStoreAdress/:id", retailerProfileController.updateStoreAdrress);
//----------------------------------------------Retailer rate-------------------------------------//

router.post("/MaterialRate",materialStoresRateController .create);
router.get("/MaterialRate", materialStoresRateController .findAll);


router.delete("/products/:id", productsController.delete);
router.delete("/MaterialRate/:id", materialStoresRateController.delete);



router.post("/AdminProfile",adminController.create);
router.get("/AdminProfile", adminController.findAll);
router.put("/AdminProfile/:id", adminController.updateProfilePhoto);
router.put("/AdminProfileCover/:id", adminController.updateCoverPhoto);

router.post("/ProjectPortfolio",projectPortfolioController.create);
router.get("/ProjectPortfolio", projectPortfolioController.findAll);


module.exports = router;
