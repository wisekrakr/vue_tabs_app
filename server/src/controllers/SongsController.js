const { Op } = require("sequelize");
const { Song } = require("../models");

module.exports = {
  async getAllSongs(req, res) {
    try {
      let songs = [];
      const search = req.query.search;
      if (search) {
        songs = await Song.findAll({
          where: {
            [Op.or]: ["title", "artist", "genre", "album"].map(key => ({
              [key]: {
                [Op.like]: `%${search}%`
              }
            }))
          }
        });
      } else {
        songs = await Song.findAll({ limit: 10 });
      }

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
  },
  async getSong(req, res) {
    try {
      const song = await Song.findByPk(req.params.songId);

      res.send(song);
    } catch (error) {
      console.log(error);
      res.status(500).send({
        error: `Error while retrieving song by id: ${error}!`
      });
    }
  },
  async updateSong(req, res) {
    try {
      await Song.update(req.body, {
        where: {
          id: req.params.songId
        }
      });

      res.send(req.body);
    } catch (error) {
      console.log(error);
      res.status(500).send({
        error: `Error while updating song: ${error}!`
      });
    }
  }
};
