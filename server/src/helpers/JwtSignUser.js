const jwt = require("jsonwebtoken");
const config = require("../config/config");

module.exports.signInUser = user => {
  const ONE_WEEK = 60 * 60 * 24 * 7;
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  });
};
