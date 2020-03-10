import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    token: localStorage.getItem("token") || "",
    user: null,
    song: null,
    songs: null,
    isUserLoggedIn: false
  },
  mutations: {
    setToken(state, token) {
      state.token = token;

      token ? (state.isUserLoggedIn = true) : (state.isUserLoggedIn = false);
    },
    setUser(state, user) {
      state.user = user;
    },
    addSong(state, song) {
      state.song = song;
    }
  },
  actions: {
    setToken({ commit }, token) {
      commit("setToken", token);
    },
    setUser({ commit }, user) {
      commit("setUser", user);
    },
    addSong({ commit }, song) {
      commit("addSong", song);
    }
  },
  modules: {}
});
