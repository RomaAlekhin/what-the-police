import { createRouter, createWebHistory } from "vue-router";
import HomeViewVue from "@/views/HomeView.vue";
import AboutViewVue from "@/views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeViewVue,
    },
    {
      path: "/about",
      name: "about",
      component: AboutViewVue,
      // component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
