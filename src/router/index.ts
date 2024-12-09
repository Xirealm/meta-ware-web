import { createRouter, createWebHistory } from 'vue-router'
import pinia from '@/stores/';
import { useUserStore } from '@/stores/user';
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
      redirect: "/index",
      children: [
        {
          path: "/index",
          name: "index",
          component: () => import("../views/Index/IndexView.vue"),
        },
      ]
    },
  ],
});

router.beforeEach(async (to, from) => {
  const userStore = useUserStore(pinia);
  if (userStore.token === "" && to.name !== "login") {
    return "/login";
  }
});

export default router
