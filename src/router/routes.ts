import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/resume/lexter',
  },
  {
    path: '/resume/:id',
    component: () => import('layouts/app-layout.vue'),
    children: [{ path: '', component: () => import('pages/resume-page.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    redirect: '/resume/lexter',
  },
];

export default routes;
