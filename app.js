"use strict";

const express = require("express");
const bodyparser = require("body-parser");

const api = require("./routes");

let app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use('/api', api);

module.exports = app;