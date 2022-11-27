import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import Egg from "../views/Egg.vue";
import Poteto from "../views/poteto.vue";
import Beef from "../views/Beef.vue";
import Pork from "../views/Pork.vue";
import Chicken from "../views/Chicken.vue";
import China from "../views/China.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/egg",
    name: "Egg",
    component: Egg,
  },
  {
    path: "/poteto",
    name: "Poteto",
    component: Poteto,
  },
  {
    path: "/beef/",
    name: "Beef",
    component: Beef,
  },
  {
    path: "/chicken/",
    name: "Chicken",
    component: Chicken,
  },
  {
    path: "/pork/",
    name: "Pork",
    component: Pork,
  },
  {
    path: "/china/",
    name: "China",
    component: China,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
