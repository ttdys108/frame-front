import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/home/index.vue';
import Login from '@/views/login/index.vue';
import MsgBox from '@/views/msgbox/index.vue';
import { start } from 'qiankun';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/msgbox',
        name: 'MsgBox',
        component: MsgBox,
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/*',
    name: 'Home',
    component: Home,
  },
  // {
  //   path: '/login',
  //   name: 'Login',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: window.FRAME_CONFIG.publicPath,
  routes
})

export default router
