import Vue from 'vue';
import VueRouter from 'vue-router';

import Landing from './views/Landing';
import About from './views/About';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Landing,
  },
  {
    path: '/about',
    component: About,
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;