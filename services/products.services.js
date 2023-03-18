const { product } = require("../models/products.model");
const { signUp } = require("../models/products.model");
//params ke ander model as a argument pass horaha product.controller.js c
async function createProduct(params, callback) { //params ke ander models argument pass horaha hai params=models
  if (!params.productName) {
    return callback(
      {
        message: "Product Name Required",
      },
      ""
    );
  }

  const productModel = new product(params); //create object of product model params=model
  productModel
    .save()
    .then((response) => {
      return callback(null, response);
    })
    .catch((error) => {
      return callback(error);
    });
}
//------------------------_createSignUp----------------------------------------//
/*async function _createSignUp(params, callback) { //params ke ander models argument pass horaha hai params=models
  if (!params.firstName) {
    return callback(
      {
        message: "First Name is Required",
      },
      ""
    );
  }

  const signUpModel = new signUp(params); //create object of product model params=model
  signUpModel
    .save()
    .then((response) => {
      return callback(null, response);
    })
    .catch((error) => {
      return callback(error);
    });
}*/

//----------------------------------------------------------------------------//

async function getProducts(params, callback) {
  const productName = params.productName;
  var condition = productName
    ? { productName: { $regex: new RegExp(productName), $options: "i" } }
    : {};

  product
    .find(condition)
    .then((response) => {
      return callback(null, response);
    })
    .catch((error) => {
      return callback(error);
    });
}

async function getProductById(params, callback) {
  const productId = params.productId;

  product
    .findById(productId)
    .then((response) => {
      if (!response) callback("Not found Product with id " + productId);
      else callback(null, response);
    })
    .catch((error) => {
      return callback(error);
    });
}

async function updateProduct(params, callback) {
  const productId = params.productId;

  product
    .findByIdAndUpdate(productId, params, { useFindAndModify: false })
    .then((response) => {
      if (!response) callback(`Cannot update Tutorial with id=${productId}. Maybe Tutorial was not found!`);
      else callback(null, response);
    })
    .catch((error) => {
      return callback(error);
    });
}

async function deleteProduct(params, callback) {
  const productId = params.productId;

  product
    .findByIdAndRemove(productId)
    .then((response) => {
      if (!response) callback(`Cannot delete Product with id=${productId}. Maybe Product was not found!`);
      else callback(null, response);
    })
    .catch((error) => {
      return callback(error);
    });
}

module.exports = {

  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct
};
