
const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", async (req, res) => {

  let body = req.body;

  //generate new password
  const user = new User(body);
  const salt = await bcrypt.genSalt(10);

  // now we set user password to hashed password
  user.password = await bcrypt.hash(body.password, salt);

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  //save user and respond

  user.save()
    .then(doc => {
      res.status(200).json(doc);

    })
    .catch(err => {
      console.log(err)
      return res.status(500).json(err)
    })



});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("user not found");

    const validPassword = await bcrypt.compare(req.body.password, user.password)
    !validPassword && res.status(400).json("wrong password")

    res.status(200).json(user)
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
