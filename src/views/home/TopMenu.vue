<template>
  <v-tabs v-if="menuInit">
    <v-tab @click="changeTopMenu(menu)" v-for="menu in menus" :key="menu.id" class="text-subtitle-1">
      {{menu.name}}
    </v-tab>
  </v-tabs>

</template>

<script lang="ts">
import Vue from 'vue';
import {mapState, mapActions} from "vuex";

const TopMenu = Vue.extend({
  data: function() {
    return {

    }
  },
  computed: {
    ...mapState<RootState>({
      menuInit: (state: RootState) => state.app.menuInit,
      menus: (state: RootState) => state.app.topMenus,
      currentTopMenuId: (state: RootState) => state.app.currentTopMenuId,
    })
  },
  methods: {
    changeTopMenu(menu: Menu): void {
      if(menu.id === this.currentTopMenuId)
        return;
      this.$store.dispatch('app/changeCurrentTopMenuId', menu.id);
    }
  }

})

export default TopMenu;
</script>