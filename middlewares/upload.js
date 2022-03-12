require('dotenv').config();
const multer = require('multer'); 

// SET STORAGE
var storage = multer.diskStorage({
    
    destination: function (req, file, cb) {
      cb(null, `/var/www/${process.env.RESOURCE_DIR}`)
    },

    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
   
  const upload = multer({ storage: storage });
  module.exports = upload 