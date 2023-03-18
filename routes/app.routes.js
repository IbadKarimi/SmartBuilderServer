const productsController = require("../controllers/products.controller");

const signUpController = require("../controllers/sign_up.controller");


const express = require("express");
const router = express.Router();

// Create a new Product
router.post("/SignUp", productsController.create);

router.post("/UserSignUp", signUpController.createSignUp);

// Retrieve all Products
router.get("/SignUp", productsController.findAll);

// Retrieve a single Product with id
router.get("/products/:id", productsController.findOne);

// Update a Product with id
router.put("/products/:id", productsController.update);

// // Delete a Product with id
router.delete("/products/:id", productsController.delete);

module.exports = router;
