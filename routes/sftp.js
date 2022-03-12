const router = require("express").Router();
const upload = require("../middlewares/upload");


//update user
router.post("/upload", upload.single('file'), async (req, res) => {
    try {
        console.log(req.file);
        res.status(200).json({message: 'success', file: req.file})
    } catch(err){
        console.log(err)
        res.send(err)
    }
   
});



module.exports = router;
