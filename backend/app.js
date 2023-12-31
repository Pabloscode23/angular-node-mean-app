const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const postsRoutes = require("./routes/posts");
const userRoutes = require("./routes/user");

const app = express();
mongoose
  .connect(
    "mongodb+srv://Pablos:" +
      process.env.MONGO_ATLAS_PW +
      "@cluster0.jb58kx1.mongodb.net/node-angular"
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch(() => {
    console.log("Error in connecting");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join("backend/images")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/posts", postsRoutes);
app.use("/api/user", userRoutes);
//en el folder luego de que se hace el build, en ese app.js
//app.use((req,res,next)=>{
// res.sendFile(path.join(__dirname,'angular','index.html'))
// })

module.exports = app;
