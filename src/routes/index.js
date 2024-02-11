import { createRouter, createWebHashHistory } from 'vue-router';

export default createRouter({
history: createWebHashHistory(),
routes: [
   {
      path: '/',
      component: () => import('@/pages/Index.vue'),
   },
   {
      path: '/login',
      component: () => import('@/pages/Login.vue'),
   },
],
}); 