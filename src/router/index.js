import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import LoaderHome from "../views/LoaderHome.vue";
import About from "../views/About.vue";
import Projet1 from "../views/Projet-1.vue";
import Projet2 from "../views/Projet-2.vue";
import Projet3 from "../views/Projet-3.vue";
import Projet4 from "../views/Projet-4.vue";
import Projet5 from "../views/Projet-5.vue";
import ErrorVue from "../views/ErrorVue.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LoaderHome",
    component: LoaderHome
  },
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/projet1",
    name: "projet1",
    component: Projet1
  },
  {
    path: "/projet2",
    name: "projet2",
    component: Projet2
  },
  {
    path: "/projet3",
    name: "projet3",
    component: Projet3
  },
  {
    path: "/projet4",
    name: "projet4",
    component: Projet4
  },
  {
    path: "/projet5",
    name: "projet5",
    component: Projet5
  },
  {
    path: "*",
    name: "error",
    component: ErrorVue
  }
];

const router = new VueRouter({
  // mode: "history",
  // base: process.env.BASE_URL,
  routes
});

export default router;
