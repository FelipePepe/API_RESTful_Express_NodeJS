"use strict";

const mongoose = require("mongoose");
const app = require("./app");

// const fs = require("fs");
// const https = require("https");

const config = require("./config");

mongoose.connect(
  config.db,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err, res) => {
    if (err) throw err;

    console.log("Connect to Database MongoDB...");

    // https
    //   .createServer(
    //     {
    //       key: fs.readFileSync("./certificados/localhost.key"),
    //       cert: fs.readFileSync("./certificados/localhost.crt"),
    //     },
    //     app
    //   )
    //   .listen(config.port, () => {
    //     console.log(`API RESTfull listen localhost:${config.port}`);
    //   });

    app.listen(config.port, () => {
      console.log(`API RESTfull listen localhost:${config.port}`);
    });
  }
);
