import Vue from "vue";
import VueRouter from "vue-router";

// Views
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Register from "@/views/auth/Register";
import Login from "@/views/auth/Login";

// Components
import Songs from "@/components/music/Songs";
import AddSong from "@/components/music/AddSong";

Vue.use(VueRouter);

const routes = [
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
    path: "/songs/add-song",
    name: "add-song",
    component: AddSong
  }
];

const router = new VueRouter({
  routes
});

export default router;
