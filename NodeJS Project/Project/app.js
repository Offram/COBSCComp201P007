const express = require("express");
const app = express();

let bearArray = [
  {
    id: 1,
    name: "Grizzly Bear",
    type: "Scary",
    place: "Scandinavian Countries",
  },
  { id: 2, name: "Polar Bear", type: "Cute", place: "Polar Region" },
  { id: 3, name: "Sloth Bear", type: "Lazy", place: "All over" },
];
app.get("/", (req, res) => {
  res.send("Hello Everyone, Welcome to the class");
});

app.get("/api/bears", (req, res) => {
  let bears = ["Grizzly Bear", "Polar Bear", "Sloth Bear"];
  res.send(bears);
});

app.get("/api/bears/:bearId", (req, res) => {
  let bearId = parseInt(req.params.bearId);
  console.log("bearId: ", bearId);

  let bear = bearArray.find((b) => {
    return b.id === bearId;
  });
  res.send(bear);
});

app.listen(3000, () => {
  console.log("Listen on Port 3000");
});
