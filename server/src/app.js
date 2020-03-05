const express = require("express");
const morgan = require("morgan");

const app = express();

// Bodyparser Middleware
app.use(express.json({ extended: false }));

app.use(morgan("combined"));

app.get("/status", (req, res) => {
  res.send({
    msg: "Hello world!"
  });
});

app.listen(process.env.PORT || 8081);
