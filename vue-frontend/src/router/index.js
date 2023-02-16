import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/email",
      name: "email",
      component: () => import("../views/template/EmailVue.vue"),
      children: [
        {
          path: "",
          component: HomeView,
        },
      ],
    },
  ],
});

export default router;
