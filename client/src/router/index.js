import Vue from "vue";
import VueRouter from "vue-router";

// Views
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";

// Components
import Register from "@/components/auth/Register";
import Login from "@/components/auth/Login";

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
  }
];

const router = new VueRouter({
  routes
});

export default router;
