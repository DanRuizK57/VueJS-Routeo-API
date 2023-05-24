import { createRouter, createWebHashHistory } from 'vue-router';

import Home from './pages/Home';
import Imagenes from './pages/Imagenes'

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home,
  },
  {
    name: 'imagenes',
    path: '/imagenes/:raza',
    component: Imagenes,
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;