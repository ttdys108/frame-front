declare module '*.vue' {
  import Vue from 'vue';
  import PopMessage from "@/types/popMessage";

  declare module 'vue/types/vue' {

    interface Vue {
      popMessage?: PopMessage;
      currentTopMenuId?: string;
    }

    interface VueConstructor {
      $popMessage: PopMessage
    }
  }

  declare module 'vue/types/options' {
    interface ComponentOptions<V extends Vue> {
      popMessage?: PopMessage;
      currentTopMenuId?: string;
    }
  }

  export default Vue
}
