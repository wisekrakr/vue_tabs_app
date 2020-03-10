const { Song } = require("../models");

module.exports = {
  async getAllSongs(req, res) {
    try {
      const songs = await Song.findAll({ limit: 10 });

      res.send(songs);
    } catch (error) {
      res.status(500).send({
        error: `Error while retrieving songs: ${error}!`
      });
    }
  },
  async addSong(req, res) {
    try {
      const song = await Song.create(req.body);

      res.send(song);
    } catch (error) {
      console.log(error);
      res.status(500).send({
        error: `Error while adding song: ${error}!`
      });
    }
  }
};
