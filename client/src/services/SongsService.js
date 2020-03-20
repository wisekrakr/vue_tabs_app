import Api from "./Api";

export default {
  getAllSongs() {
    return Api().get("songs");
  },
  addSong(song) {
    return Api().post("songs", song);
  },
  getSong(songId) {
    return Api().get(`songs/get/${songId}`);
  }
};
