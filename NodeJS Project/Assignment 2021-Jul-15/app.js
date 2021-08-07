const express = require("express");
const logHandler = require("./middleware/logger");
const students = require("./routes/students");
const subjects = require("./routes/subjects");
const home = require("./routes/home");
const app = express();

app.use(express.json()); //Parse JSON objects in requests
app.use(logHandler); //Request logger middleware


app.use('/', home); //Home route
app.use('/api/students', students); //Students route
app.use('/api/subjects', subjects); //Subjects route

app.listen(3000, () => {
  console.log("Listen on Port 3000");
});
