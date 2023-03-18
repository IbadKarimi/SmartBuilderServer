const mongoose = require("mongoose");

const signUp = mongoose.model(
    "signUp",//------> like table name
    mongoose.Schema(
      {
        firstName: String,
        lastName: String,
        email: String,
        password: String,
        country:String,
      },
      { timestamps: true }
    )
  );

  module.exports = {

    signUp,
  };