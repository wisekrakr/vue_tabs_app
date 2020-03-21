import Vue from "vue";
import VueRouter from "vue-router";

// Views
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Register from "@/views/auth/Register";
import Login from "@/views/auth/Login";

// Components
import Songs from "@/components/music/songs/Songs";
import Song from "@/components/music/song/Song";
import AddSong from "@/components/music/AddSong";
import EditSong from "@/components/music/EditSong";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "songs"
  },
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/songs",
    name: "songs",
    component: Songs
  },
  {
    path: "/songs/get/:songId",
    name: "song",
    component: Song
  },

  {
    path: "/songs/add-song",
    name: "add-song",
    component: AddSong
  },

  {
    path: "/songs/get/:songId/edit",
    name: "edit-song",
    component: EditSong
  }
];

const router = new VueRouter({
  routes
});

export default router;
