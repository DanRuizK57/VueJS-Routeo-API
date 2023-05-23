import { createRouter, createWebHashHistory } from 'vue-router';

import Home from './pages/Home';

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home,
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;