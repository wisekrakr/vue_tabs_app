const fs = require("fs");
const path = require("path");
const Sequilize = require("sequelize");
const config = require("../config/config");
const db = {};

const sequelize = new Sequilize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
);

// fs goes through all the files in the current directory (All models)
fs.readdirSync(__dirname)
  .filter(file => file !== "index.js")
  .forEach(file => {
    // sequelize gives a path to a file, imports it and uses it
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

db.sequelize = sequelize;
db.Sequilize = Sequilize;

module.exports = db;
