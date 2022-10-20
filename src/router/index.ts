import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  { path: '/attrs', component: () => import('@/views/attrs/index.vue') },
  { path: '/marked', component: () => import('@/views/mark/index.vue') },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
