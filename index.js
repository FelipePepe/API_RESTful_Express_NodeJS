"use strict";

const mongoose = require("mongoose");
const app = require("./app");

const config = require("./config");

mongoose.connect(config.db, (err, res) => {
  if (err) throw err;

  console.log("Connect to Database MongoDB...");

  app.listen(config.port, () => {
    console.log(`API RESTfull listen localhost:${config.port}`);
  });
});
