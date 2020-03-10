const { User } = require("../models");
const JwtSignUser = require("../helpers/JwtSignUser");
const bcrypt = require("bcryptjs");

module.exports = {
  async register(req, res) {
    const { password } = req.body;
    try {
      const user = await User.create(req.body);

      //   Create a password hash & salt
      const salt = await bcrypt.genSalt(8);

      user.password = await bcrypt.hash(password, salt);

      const userJson = user.toJSON();
      res.send({
        user: userJson,
        token: JwtSignUser.signInUser(userJson)
      });
    } catch (error) {
      res.status(500).send({
        error: `Registration Aborted ${error}!`
      });
    }
  },
  async login(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ where: { email: email } });

      if (!user) {
        return res.status(403).send({
          error: "Login email is incorrect"
        });
      }

      const isPasswordValid = await user.comparePassword(password);

      if (!isPasswordValid) {
        return res.status(403).send({
          error: "Login password is incorrect"
        });
      }

      const userJson = user.toJSON();
      res.send({
        user: userJson,
        token: JwtSignUser.signInUser(userJson)
      });
    } catch (error) {
      res.status(500).send({
        error: `Error during login: Login failed ${error}!`
      });
    }
  }
};
