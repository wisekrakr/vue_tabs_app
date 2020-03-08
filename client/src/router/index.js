import Vue from "vue";
import VueRouter from "vue-router";

// Views
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";

// Components
import Register from "@/components/auth/Register";
// import Test from "@/components/TestPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  }
];

const router = new VueRouter({
  routes
});

export default router;
