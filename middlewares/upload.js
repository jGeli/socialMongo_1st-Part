require('dotenv').config();
const multer = require('multer'); 

// SET STORAGE
var storage = multer.diskStorage({
    
    destination: function (req, file, cb) {
      cb(null, 'resources')
    },

    filename: function (req, file, cb) {
      console.log(file)
      cb(null, Date.now() + '-' + file.originalname)
    }
  })
   
  const upload = multer({ storage: storage });
  module.exports = upload 