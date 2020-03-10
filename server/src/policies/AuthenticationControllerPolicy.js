const Joi = require("joi");

module.exports = {
  register(req, res, next) {
    const schema = {
      username: Joi.string(),
      email: Joi.string().email(),
      password: Joi.string().regex(new RegExp("^[a-zA-Z0-9]{8,32}$"))
    };

    const { error, value } = Joi.validate(req.body, schema);

    if (error) {
      switch (error.details[0].context.key) {
        case "email":
          res
            .status(400)
            .send({ error: "Please provide a valid email address" });
          break;
        case "password":
          res.status(400).send({
            error: `Invalid password: 
                    <br>
                    1. It must contain ONLY the following characters: lower case, upper case or numerics
                    <br>
                    2. It must be between 8 - 32 characters
                `
          });
          break;
        default:
          res.status(400).send({ error: "Invalid registration" });
      }
    } else {
      // next => AuthenticationController.register in routes.js
      next();
    }
  }
};