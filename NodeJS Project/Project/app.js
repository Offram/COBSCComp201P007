const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authenticationHandler = require("./middlewares/authentication");
const logHandler = require("./middlewares/logger");
const home = require("./routes/home");
const bears = require("./routes/bears");
const users = require("./routes/users");
const app = express();

mongoose.connect("mongodb://localhost:27017/beardb", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then(() => console.log("Connected to db successfully....."))
  .catch((err) => console.log("Error has occured while connecting to db:", err));

app.use(cors());
app.use(express.json()); // Parse JSON objects in requests
app.use(authenticationHandler); //Autherntication middleware
app.use(logHandler); //Request logger middleware

// app.use((req, res, next) => { 
//   console.log("Middleware 1 executing.....");
//   next();
// });
// app.use((req, res, next) => {
//   console.log("Middleware 2 executing.....");
//   next();
// });

app.use('/', home);
app.use('/api/bears', bears);
app.use('/api/users', users);

app.listen(5000, () => {
  console.log("Listen on Port 5000");
});
