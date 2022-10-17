import { createWebHistory, createRouter } from "vue-router";
import TailwindCSS from "./components/TailwindCSS";

const routes = [
  {
    path: "/css",
    component: TailwindCSS,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
