"use strict";

const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  port: process.env.PORT,
  db:
    "mongodb+srv://" +
    process.env.userdb +
    ":" +
    process.env.passdb +
    "@cluster0.p2tmu.mongodb.net/test",
};
