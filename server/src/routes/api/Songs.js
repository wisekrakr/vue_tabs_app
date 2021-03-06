const SongsController = require("../../controllers/SongsController");

module.exports = app => {
  app.post("/songs", SongsController.addSong);
  app.get("/songs", SongsController.getAllSongs);
  app.get("/songs/get/:songId", SongsController.getSong);
  app.put("/songs/get/:songId", SongsController.updateSong);
};
