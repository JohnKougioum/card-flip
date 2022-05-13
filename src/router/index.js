import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Fifth from "../views/Fifth.vue";
import Sixth from "../views/Sixth.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/fifth",
    name: "Fifth",
    component: Fifth,
  },
  {
    path: "/sixth",
    name: "Sixth",
    component: Sixth,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
