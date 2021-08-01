import '@/sysconfig';

import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import vuetify from '@/plugins/vuetify';
import { registerMicroApps, start } from 'qiankun';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
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
