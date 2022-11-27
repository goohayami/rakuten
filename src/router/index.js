import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import Egg from "../views/Egg.vue";
import Poteto from "../views/poteto.vue";
import Jobs from "../views/jobs/Jobs.vue";
import JobDetails from "../views/jobs/JobDetails.vue";

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
    path: "/jobs",
    name: "Jobs",
    component: Jobs,
  },
  {
    path: "/jobs/:id",
    name: "JobDetails",
    component: JobDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
