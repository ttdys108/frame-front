<template>
  <v-app>
    <v-app-bar app color="white" clipped-left>
      <v-row>
        <!-- 大屏显示logo -->
        <v-col v-if="!$vuetify.breakpoint.mobile" xs="4" md="2" class="overflow-hidden">
          <span class="logo"></span>
          <span class="text-h5" style="line-height: 3rem;">Spark微平台</span>
        </v-col>
        <v-col v-else cols="2">
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </v-col>

        <!-- 顶部菜单栏 -->
        <v-col :cols="$vuetify.breakpoint.mobile ? 7 : undefined" class="overflow-hidden">
          <top-menu />
        </v-col>

        <v-col cols="2" class="text-right overflow-hidden">
          <template v-if="!$vuetify.breakpoint.mobile">
            <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <v-badge content="6" color="red" offset-y="20" offset-x="20">
              <v-btn icon>
                <v-icon>mdi-bell-ring-outline</v-icon>
              </v-btn>
            </v-badge>
            <v-btn icon>
              <v-icon>mdi-heart-outline</v-icon>
            </v-btn>
          </template>
          <v-menu right
                  bottom offset-y
                  open-on-click
                  transition="scale-transition" origin="top right">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  icon
                  v-bind="attrs"
                  v-on="on"
              >
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                  v-for="n in 5"
                  :key="n"
                  @click="() => {}"
              >
                <v-list-item-title>Option {{ n }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
      </v-row>

    </v-app-bar>

    <!-- 侧边菜单栏 -->
    <v-navigation-drawer app v-if="sideMenus && sideMenus.length > 0"
         clipped permanent class="elevation-3">
      <side-menu />
    </v-navigation-drawer>


    <v-main app class="grey lighten-5">
      <v-container style="max-width: 100%;" >
        <v-tabs background-color="#fafafa" hide-slider
          height="35" active-class="white">
          <v-tab >产品管理</v-tab>
          <v-tab >交易管理</v-tab>
          <v-tab >用户信息</v-tab>
          <v-tab >系统设置</v-tab>
        </v-tabs>
        <div class="white pa-2 elevation-2" style="height: 200px;">
          123123123
          <!-- 主应用页面 -->
          <router-view/>
          <!-- 子应用插入节点 -->
          <div id="bizframe"></div>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.logo{
  display: inline-block;
  background-image: url("../../assets/logo.png");
  background-size: 100% 100%;
  width: 40px;
  height: 20px;
  margin-left: 20px;
}

</style>

<script lang="ts">
import Vue from 'vue';
import { start } from 'qiankun';
import TopMenu from './TopMenu.vue';
import SideMenu from './SideMenu.vue';
import {mapState} from "vuex";

const Home = Vue.extend({
  name: 'Home',
  components: {
    TopMenu,
    SideMenu,
  },
  computed: {
    ...mapState<RootState>({
      sideMenus: (state: RootState) => state.app.sideMenus,
    })
  },
  mounted() {
    if (!window.__QIANKUN_STARTED__) {
      window.__QIANKUN_STARTED__ = true;
      console.log('qiankun started...');
      start();
    }
  },

})

export default Home;
</script>
