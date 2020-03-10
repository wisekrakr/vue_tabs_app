const SongsController = require("../../controllers/SongsController");

module.exports = app => {
  app.post("/songs", SongsController.addSong);
  app.get("/songs", SongsController.getAllSongs);
};
