"use strict";

const express = require("express");
const bodyparser = require("body-parser");

const hbs = require("express-handlebars");
const api = require("./routes");

let app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json({ limit: "100kb", parameterLimit: "1000}" }));

app.engine(
  ".hbs",
  hbs({
    defaultLayout: "default",
    extname: "hbs",
  })
);

app.set("view engine", ".hbs");

app.use("/api", api);
app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/product", (req, res) => {
  res.render("product");
});

module.exports = app;
