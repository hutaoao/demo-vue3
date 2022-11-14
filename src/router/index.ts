import { createRouter, createWebHashHistory } from "vue-router";
import SetupView from "../views/SetupView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/setup",
    },
    {
      path: "/setup",
      name: "SetupView",
      component: SetupView,
    },
    {
      path: "/option",
      name: "OptionView",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/OptionView.vue"),
    },
  ],
});

export default router;
