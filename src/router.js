import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './views/Home';
import Contact from './views/Contact';
import Blog from './views/Blog';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/contact',
    component: Contact,
  },
  {
    path: '/blog',
    component: Blog,
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

/* Print NavigationDuplicated errors to console as warnings */
const originalPush = router.push;
router.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject);
  }
  return originalPush.call(this, location).catch((err) => {
    if (VueRouter.isNavigationFailure(err)) {
      console.warn(err);
      return err;
    }
    return Promise.reject(err);
  });
};

export default router;