import '@/sysconfig';

import '@/styles/app.css';

import Vue from 'vue'
import store from '@/store'
import router from '@/router'
import vuetify from '@/plugins/vuetify';
import App from '@/App.vue'

import { registerMicroApps, start } from 'qiankun';
import popMessage from "@/util/popMessage";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  popMessage,
  render: h => h(App),
}).$mount('#app');

// 子系统注册
registerMicroApps([
  {
    name: 'usercenter',
    entry: 'http://localhost:8081',
    container: '#bizframe',
    activeRule: '/user',
  },
]);

// 启动微服务，不在入口启动，在Home页面启动
// start();
