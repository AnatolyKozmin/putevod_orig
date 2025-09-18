import { createRouter, createWebHistory } from 'vue-router';
import InitDataPage from '@/pages/InitDataPage.vue';
import ThemeParamsPage from '@/pages/ThemeParamsPage.vue';
import LaunchParamsPage from '@/pages/LaunchParamsPage.vue';
import LeftMenuPage from '@/pages/LeftMenuPage.vue';

export const routes = [
  {
    path: '/',
    name: 'main-menu',
    component: () => import('@/pages/MainMenuPage.vue'),
    meta: {
      title: 'Главное меню',
    },
  },
  {
    path: '/left',
    name: 'left-page',
    component: LeftMenuPage,
    meta: {
      title: 'Левая страница',
    },
  },
  {
    path: '/init-data',
    name: 'init-data',
    component: InitDataPage,
    meta: {
      title: 'Init Data',
    },
  },
  {
    path: '/theme-params',
    name: 'theme-params',
    component: ThemeParamsPage,
    meta: {
      title: 'Theme Params',
    },
  },
  {
    path: '/launch-params',
    name: 'launch-params',
    component: LaunchParamsPage,
    meta: {
      title: 'Launch Params',
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
