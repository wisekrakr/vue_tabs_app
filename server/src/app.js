const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { sequelize } = require("./models");
const config = require("./config/config");

const app = express();

// Bodyparser Middleware
app.use(express.json({ extended: false }));

app.use(morgan("combined"));
app.use(cors());

require("./routes/routes")(app);

// Connect sequelize to the database and create tables if they don't exist
sequelize.sync({ force: false }).then(() => {
  app.listen(config.port);
  console.log(`Server is connected to port ${config.port}`);
});
