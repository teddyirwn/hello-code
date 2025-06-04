import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/admin",
    component: () => import("../views/AdminDashboard.vue"),
    children: [
      {
        path: "login",
        component: () => import("../views/AdminLogin.vue"),
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
