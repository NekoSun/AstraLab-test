import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'EnterScreen',
    meta: { title: 'Ready for a great User experience?' },
    component: () => import('@/frame/EnterScreen'),
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    meta: { title: 'Sign In' },
    component: () => import('@/frame/SignIn'),
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    meta: { title: 'Sign Up' },
    component: () => import('@/frame/SignUp'),
  },
  {
    path: '/main',
    name: 'Main',
    meta: { title: 'Hello,' },
    component: () => import('@/frame/Main'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
