var logger = require("./log"); //LOCAL MODULE
var http = require("http"); //CORE MODULE

logger.logInfoMessage("App has started");
console.log(logger.secretCode);

var server = http.createServer(function (req, res) {
  if ((req.url = "/")) {
    res.write("Hello World!");
    res.end(); //Response cycle ends here
  } else if ((req.url = "/pizzas")) {
    res.write("Keep them pizzas coming!!!");
    res.end(); //Response cycle ends here
  }
});
server.listen(5000);
console.log("Listening on Port 5000");

server.addListener("connection", function () {
  console.log("Connected!!!");
});
