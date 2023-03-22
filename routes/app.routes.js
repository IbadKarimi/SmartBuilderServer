const productsController = require("../controllers/products.controller");

const signUpController = require("../controllers/sign_up.controller");

const ownerProfileController = require("../controllers/owner_profile_controller");




const express = require("express");
const router = express.Router();

// Create a new Product
router.post("/SignUp", productsController.create);
//-----------------------------------------------------------//
router.post("/UserSignUp", signUpController.createSignUp);
router.get("/UserSignUp", signUpController.findAllUsers);

//----------------------------------------------------------//

//------------------------Owner Profile----------------------//
router.post("/CreateOwnerProfile", ownerProfileController.create);
router.get("/GetOwnerProfile", ownerProfileController.findAll);


//------------------------------------------------------------//

// Retrieve all Products
router.get("/SignUp", productsController.findAll);

// Retrieve a single Product with id
router.get("/products/:id", productsController.findOne);

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

module.exports = router;
