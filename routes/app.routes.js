const productsController = require("../controllers/products.controller");

const signUpController = require("../controllers/sign_up.controller");

const ownerProfileController = require("../controllers/owner_profile_controller");

const ownerSubmitProposalController = require("../controllers/owner_submit_proposal_controller");

const professionalWorkExperienceController = require("../controllers/professionals_work_experience_controller");

const professionalsProfileController = require("../controllers/professionals_profile_controller");

const proCoverPhotoController = require("../controllers/pro_profile_cover_photo.controller");


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

  //-------------------------------------Professionals Cover Photo----------------------//
router.post("/ProCoverPhoto", proCoverPhotoController.createCoverPhotoEmail);
router.get("/ProCoverPhoto", proCoverPhotoController.findAllCoverPhotoEmail);


router.put("/CoverEmail/:id", ownerProfileController.updateCoverPhotoEmail);



module.exports = router;
