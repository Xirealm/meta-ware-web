import { createRouter, createWebHashHistory } from 'vue-router'
import pinia from '@/stores/';
import { useUserStore } from '@/stores/user';
import LoginView from '../views/Login/LoginView.vue';
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
      children: [
        {
          path: "/index",
          name: "index",
          component: () => import("../views/Index/IndexView.vue"),
        },
        {
          path: "/consultationInformation",
          name: "consultationInformation",
          component: () =>
            import(
              "../views/consultationInformation/ConsultationconsultationInformation.vue"
            ),
        },
      ],
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
