import Api from "./Api";

export default {
  getAllSongs(search) {
    return Api().get("songs", {
      params: {
        search: search
      }
    });
  },
  addSong(song) {
    return Api().post("songs", song);
  },
  getSong(songId) {
    return Api().get(`songs/get/${songId}`);
  },
  updateSong(songId, song) {
    return Api().put(`songs/get/${songId}`, song);
  }
};
