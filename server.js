const express = require("express");
const dotenv = require("dotenv").config();

const app = express();
const port = process.env.PORT || 3004;

app.get("/", (req, res) => {
  res.status().send("Hello World!");
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
