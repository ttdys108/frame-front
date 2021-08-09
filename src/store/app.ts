import Vuex, {ActionTree, MutationTree} from 'vuex';
import {Module} from "vuex";

const state: AppStoreState = {
    menuInit: false,
    menus: [],
    topMenus: [],
    currentTopMenuId: undefined,
    sideMenus: [],
}

const mutations: MutationTree<AppStoreState> = {
    setTopMenus(state, menus) {
        state.topMenus = menus;
    },
    setSideMenus(state, menus) {
        state.sideMenus = menus;
    },
    setMenus(state, menus) {
        state.menus = menus;
    },
    setMenuInit(state, menuInit) {
        state.menuInit = menuInit;
    },
    setCurrentTopMenuId(state, menuId) {
        state.currentTopMenuId = menuId;
    }
}

const actions: ActionTree<AppStoreState, RootState> = {
    initMenus({commit}, menus: Menu[]) {
        let topMenus = menus.filter(m => m.isRoot);
        let sideMenus: Optional<Menu[]>;
        let currentTopMenuId: Optional<string>;
        // 初始化显示第一个菜单的子菜单
        if(topMenus.length > 0) {
            currentTopMenuId = topMenus[0].id;
            sideMenus = topMenus[0].children || [];
        }
        commit('setMenus', menus);
        commit('setTopMenus', topMenus);
        commit('setSideMenus', sideMenus);
        commit('setCurrentTopMenuId', currentTopMenuId);
        commit('setMenuInit', true);
    },
    unsetMenus({commit}) {
        commit('setMenus', []);
        commit('setTopMenus', []);
        commit('setCurrentTopMenuId', undefined);
        commit('setSideMenus', []);
        commit('setMenuInit', false);
    },
    changeCurrentTopMenuId({commit, state}, id: string) {
        let topMenu = state.menus!.find(d => d.id === id);
        commit('setCurrentTopMenuId', id);
        commit('setSideMenus', topMenu!.children);
    },
}

const AppStore: Module<AppStoreState, RootState> = {
    namespaced: true,
    state,
    mutations,
    actions,
    // state: {
    //     menuInit: false,
    //     menus: [],
    //     topMenus: [],
    //     currentTopMenuId: undefined,
    //     sideMenus: [],
    // },
    // mutations: {
    //     setTopMenus(state, menus) {
    //         state.topMenus = menus;
    //     },
    //     setSideMenus(state, menus) {
    //         state.sideMenus = menus;
    //     },
    //     setMenus(state, menus) {
    //         state.menus = menus;
    //     },
    //     setMenuInit(state, menuInit) {
    //         state.menuInit = menuInit;
    //     },
    //     setCurrentTopMenuId(state, menuId) {
    //         state.currentTopMenuId = menuId;
    //     }
    // },
    // actions: {
    //     initMenus({commit}, menus: Menu[]) {
    //         let topMenus = menus.filter(m => m.isRoot);
    //         let sideMenus: Optional<Menu[]>;
    //         let currentTopMenuId: Optional<string>;
    //         // 初始化显示第一个菜单的子菜单
    //         if(topMenus.length > 0) {
    //             currentTopMenuId = topMenus[0].id;
    //             sideMenus = topMenus[0].children || [];
    //         }
    //         commit('setMenus', menus);
    //         commit('setTopMenus', topMenus);
    //         commit('setSideMenus', sideMenus);
    //         commit('setCurrentTopMenuId', currentTopMenuId);
    //         commit('setMenuInit', true);
    //     },
    //     unsetMenus({commit}) {
    //         commit('setMenus', []);
    //         commit('setTopMenus', []);
    //         commit('setCurrentTopMenuId', undefined);
    //         commit('setSideMenus', []);
    //         commit('setMenuInit', false);
    //     },
    //
    // },
}

export default AppStore;
