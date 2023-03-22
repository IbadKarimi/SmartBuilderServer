const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const { MONGO_DB_CONFIG } = require("./config/app.config");
const errors = require("./middleware/errors.js");
const os = require('os');

const fs = require('fs-extra');
var bodyParser=require('body-parser')








mongoose.Promise = global.Promise;
mongoose
  .connect(MONGO_DB_CONFIG.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("Database connected");
    },
    (error) => {
      console.log("Database can't be connected: " + error);
    }
  );

app.use(express.json());

app.use("/uploads", express.static("uploads"));

// initialize routes
app.use("/smart-builders", require("./routes/app.routes"));

app.use(errors.errorHandler);

app.use(cors());




// listen for requests


//mongodb://127.0.0.1:27017/smartBuilder


app.get('/uploadz',(req,res)=>res.send("Api is Working"));


app.post('/uploadz' ,async(req,res,next)=>{

  
  console.log("APi is Correct");
  await res.send({message:"Upload Image in flutter"});
});


app.post('/uploads',async(req,res)=>{
  var name = req.body.name;
var img = req.body.image;
console.log(name);
console.log(img);




var realFile = Buffer.from(img, "base64");
fs.writeFile(req.body.name,realFile, "utf8");
});

app.listen(process.env.port || 3000, function () {
  console.log("Ready to Go!");
});

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

app.post('/uploadImage', upload.single('image'), (req, res) => {
  res.send('Image uploaded successfully');
});