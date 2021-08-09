import Vue from 'vue'
import Vuex from 'vuex'
import AppStore from "@/store/app";

Vue.use(Vuex)

// TODO 类型推断怎么弄？
export default new Vuex.Store<RootState>({
  modules: {
    app: AppStore,
  }
})
