"use strict";

const User = require("../models/user");
const service = require("../services");

const signUp = (req, res) => {
  let user = new User();

  user.email = req.body.email;
  user.displayName = req.body.displayName;

  user.save((err) => {
    if (err) res.status(500).send({ message: `Error: ${err}` });

    return res.status(200).send({ token: service.createToken(user) });
  });
};

const signIn = (req, res) => {
  User.find({ email: req.body.email }, (err, user) => {
    if (err) res.status(500).send({ message: `Error: ${err}` });
    if (!user) res.status(404).send({ message: "Error: user not exists" });

    req.user = user;
    res.status(200).send({
      message: "signIn OK",
      token: service.createToken(user),
    });
  });
};

module.exports = { signUp, signIn };
