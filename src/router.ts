import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/home.vue';
import Login from '@/views/login.vue';
import Sigup from '@/views/sigup.vue';
import Create from '@/views/create.vue';
import store from './store';
const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sigup',
      name: 'sigup',
      component: Sigup
    },
    {
      path: '/login',
      name: 'login',
      meta: { redirectAlreadyLogin: true },
      component: Login
    },
    {
      path: '/create',
      name: 'create',
      meta: { requiredLogin: true },
      component: Create
    }
  ]
});
router.beforeEach((to, from, next) => {
  if (to.meta.requiredLogin && !store.state.user.isLogin) {
    next({ name: 'login' })
  } else if (to.meta.redirectAlreadyLogin && store.state.user.isLogin) {
    next('/')
  } else {
    next()
  }
})
export default router;

