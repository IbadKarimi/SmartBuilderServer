//-----------------------------------only single photo-------------//
/*const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage })

module.exports=upload.single("productImage");*/

//-----------------multiple photo--------------------//


const multer = require('multer');
// Set up multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    if (file.fieldname === 'uploadPhoto') {
      cb(null, file.originalname);
    } else if (file.fieldname === 'uploadCnicPhoto') {
      cb(null, file.originalname);
      
    }else if (file.fieldname === 'uploadCoverPhoto') {
      cb(null, file.originalname);
      
    }else if (file.fieldname === 'projectFile') {
      cb(null, file.originalname);
      
    }
    else if (file.fieldname === 'profilePhoto') {
      cb(null, file.originalname);
      
    }
    else if (file.fieldname === 'coverPhoto') {
      cb(null, file.originalname);
      
    }else {
      cb(new Error('Invalid field name'));
    }
  }
});

// Set up multer middleware
const upload = multer({ storage: storage });

// Handle the POST request
module.exports=upload.fields([
  { name: 'uploadPhoto', maxCount: 1 },
  { name: 'uploadCnicPhoto', maxCount: 1 },
  { name: 'uploadCoverPhoto', maxCount: 1 },
  { name: 'projectFile', maxCount: 1 },
  { name: 'coverPhoto', maxCount: 1 },
  { name: 'profilePhoto', maxCount: 1 },
]);

 


