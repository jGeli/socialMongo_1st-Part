require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
var bodyParser = require('body-parser');            
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

const sftpRoute = require("./routes/sftp");
// const url = 'mongodb://127.0.0.1:27017/socialMongo'

console.log(process.env.MONGO_URL)

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

//middleware




app.use(bodyParser.json({limit:'50mb'})); 
app.use(bodyParser.urlencoded({extended:true, limit:'50mb'})); 
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));



app.use('/static-file', express.static('resources'))

app.use("/api/sms/auth", authRoute);
app.use("/api/sms/users", userRoute);
app.use("/api/sms/posts", postRoute);

app.listen(8800, () => {
  console.log("Backend server is running!");
});
