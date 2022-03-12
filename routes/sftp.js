const router = require("express").Router();
const upload = require("../middlewares/upload");


//update user
router.post("/upload", upload.single('file'), async (req, res) => {
    console.log(req.file);
    res.state(200).json({message: 'success'})

});



module.exports = router;
