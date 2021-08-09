import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/home/index.vue';
import Login from '@/views/login/index.vue';
import MsgBox from '@/views/msgbox/index.vue';
import { start } from 'qiankun';
import store from '@/store'
import DataApi from "@/api/DataApi";
import {isSucceed} from "@/util/CommonUtils";

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
  base: window.LOCAL_CONFIG.PUBLIC_PATH,
  routes
})

router.beforeEach((to, from, next) => {
  console.log('menu init', store.state.app.menuInit);
  // 初始化菜单
  if(!store.state.app.menuInit) {
    DataApi.getMenus().then((res) => {
      if(isSucceed(res)) {
        return store.dispatch('app/initMenus', res.data);
      } else {
        console.error('获取菜单失败', res);
      }
    }).then(() => {
      next();
    });
  } else {



  }

})

export default router
