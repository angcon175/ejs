const express = require("express");
const app = express();
const port = 3000;

app.listen(port, (req, res) => {
  console.log(`Listening to ${port}`);
});

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/rolldice", (req, res) => {
  let val = Math.floor(Math.random() * 10) + 1;
  res.render("rolldice.ejs", { num: val });
});
