const mongoose = require("mongoose");

const MaterialStoresModel = mongoose.model(
    "MaterialStoresModels",//------> like table name
    mongoose.Schema(
      {
        email:String,
        materialName:String,
        amount:String,
        unit:String,
        date:String,
        
       
      

        
        
        
    
      },
      { timestamps: true },
    
    )
  );

  module.exports = {

    MaterialStoresModel,
  };