const express = require("express");
const authenticationHandler = require("./middlewares/authentication");
const logHandler = require("./middlewares/logger");
const bears = require("./routes/bears");
const home = require("./routes/home");
const app = express();

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

app.listen(3000, () => {
  console.log("Listen on Port 3000");
});
