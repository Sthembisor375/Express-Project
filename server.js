const express = require("express");
const app = express();
const port = 3004;

app.get("/", (req, res) => {
  res.status(500).send("Hello World!");
});

app.get("/food", (req, res) => {
  res.send("Hello World! Food is here");
});

app.get("/users", (req, res) => {
  res.send("The users will go here");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
