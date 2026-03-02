import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/resume/1/:id',
    component: () => import('layouts/app-layout.vue'),
    children: [
      { path: '', component: () => import('pages/1/resume-page.vue') },
    ],
  },
  // {
  //   path: '/resume/2/:id',
  //   component: () => import('layouts/app-layout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/2/resume-page.vue') },
  //   ],
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    redirect: '/resume/1/lexter-latest',
  },
];

export default routes;
