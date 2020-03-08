module.exports = app => {
  app.post("/register", (req, res) => {
    console.log(req.body);
    res.send({
      msg: `Registration Complete ${req.body.email}!`
    });
  });
};
