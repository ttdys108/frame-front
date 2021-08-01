<template>
  <v-app>
    <v-app-bar class="flex">
      <div>
        <router-link to="/login">Login</router-link>
      </div>
      <div>
        <router-link to="/user">User Center</router-link>
        <router-link to="/">Back Frame</router-link>
      </div>
      <div>
        <router-link to="/msgbox">msgbox</router-link>
      </div>
    </v-app-bar>
    <v-main>
      <v-container >
        <!-- 主应用页面 -->
        <router-view/>
        <!-- 子应用插入节点 -->
        <div id="bizframe"></div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { start } from 'qiankun';

const Home = Vue.extend({
  name: 'Home',

  components: {
  },

  mounted() {
    if (!window.__QIANKUN_STARTED__) {
      window.__QIANKUN_STARTED__ = true;
      console.log('qiankun started in sub router...');
      start();
    }
    // console.log('qiankun started in sub router...');
    // start();
  },

})

export default Home;
</script>
