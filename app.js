const express = require('express');
const cors = require("cors")
const app = express();
const path = require("path")

app.use(cors())
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.get('/',function(req, res) {
  res.render("index");
});

module.exports = app;