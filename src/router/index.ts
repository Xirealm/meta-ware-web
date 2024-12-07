import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/Login/LoginView.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/",
      component: () => import("../layout/Layout.vue"),
      redirect: "/login",
      children:[]
    },
  ],
});

export default router
