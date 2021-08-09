<template>
  <v-list nav dense v-if="menuInit">
    <v-list-item-group color="primary">
      <template v-for="menu in menus">
        <!-- 没有子菜单 -->
        <v-list-item :key="menu.id" v-if="!menu.children || menu.children.length === 0">
          <v-list-item-icon>
            <v-icon>{{menu.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-subtitle-2">{{ menu.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- 有子菜单 -->
        <v-list-group v-else :key="menu.id"
            :prepend-icon="menu.icon"
        >
          <template v-slot:activator>
            <v-list-item-title class="text-subtitle-2">{{menu.name}}</v-list-item-title>
          </template>
          <v-list-item v-for="subMenu in menu.children" :key="subMenu.id">
            <!-- 没有二级子菜单 -->
            <v-list-item v-if="!subMenu.children || subMenu.children.length === 0">
              <v-list-item-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="text-subtitle-2">{{subMenu.name}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <!-- 有二级子菜单 -->
            <v-menu v-else
                    transition="scale-transition" open-on-hover offset-x nudge-right="10"
                    close-delay="200" open-delay="100">
              <template v-slot:activator="{ on, attrs }">
                <v-list-item-icon>
                </v-list-item-icon>
                <v-list-item-content v-bind="attrs"
                                     v-on="on">
                  <v-list-item-title class="text-subtitle-2">
                    {{subMenu.name}}<v-icon>mdi-chevron-right</v-icon>
                  </v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list dense>
                <v-list-item v-for="thirdMenu in subMenu.children" :key="thirdMenu.id">
                  <v-list-item-title >{{ thirdMenu.name }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-list-item>
        </v-list-group>
      </template>
    </v-list-item-group>
  </v-list>
</template>

<script lang="ts">
import Vue from 'vue';
import {mapState} from "vuex";

/**
 * 侧边栏菜单，最多只支持3层菜单嵌套
 */
const SideMenu = Vue.extend({
  computed: {
    ...mapState<RootState>({
      menuInit: (state: RootState) => state.app.menuInit,
      menus: (state: RootState) => state.app.sideMenus,
    })
  }

})

export default SideMenu;
</script>