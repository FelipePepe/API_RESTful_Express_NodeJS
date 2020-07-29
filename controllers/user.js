"use strict";

const User = require("../models/user");
const service = require("../services");

const signUp = (req, res) => {
  let user = new User();

  if (req.body && req.body.email && req.body.email.length > 0) {
    user.email = req.body.email;
    user.displayName = req.body.displayName;

    user.save((err) => {
      if (err) res.status(500).send({ message: `Error: ${err}` });

      return res.status(200).send({ token: service.createToken(user) });
    });
  } else {
    res.status(500).send({ message: "Empty data" });
  }
};

const signIn = (req, res) => {
  const email = req.body.email;

  User.find({ email }, (err, user) => {
    if (err) return res.status(500).send({ message: `Error: ${err}` });
    if (!user || user.length === 0) {
      return res.status(404).send({ message: "Error: user not exists" });
    }

    req.user = user[0];
    res.status(200).send({
      message: "signIn OK",
      token: service.createToken(user[0]),
    });
  });
};

module.exports = { signUp, signIn };
