"use strict";

const jwt = require("jwt-simple");
const moment = require("moment");
const config = require("../config");

const createToken = (user) => {
  const payload = {
    sub: user.email + "_" + user._id,
    iat: moment().unix(),
    exp: moment().add(14, "days").unix(),
  };

  return jwt.encode(payload, config.secretJWT);
};

const decodeToken = (token) => {
  const decode = new Promise((resolve, reject) => {
    try {
      const payload = jwt.decode(token, config.secretJWT);

      if (payload.exp <= moment.unix()) {
        reject({
          status: 401,
          message: "Token expired",
        });
      }

      resolve(payload.sub);
    } catch (err) {
      reject({
        status: 500,
        message: "Invalid Token",
      });
    }
  });

  return decode;
};

module.exports = { createToken, decodeToken };
