import Vue, {PluginFunction} from 'vue';
import PopMessage from "@/types/popMessage";

const show = (msg: string) => {
    let Snackbar = Vue.extend({
        template: `<v-snackbar>${msg}</v-snackbar>`
    });
    new Snackbar().$mount('body');
}

const popMessage: PopMessage = {
    info(msg) {
        show(msg);
    },
    success(msg) {
        show(msg);
    },
    error(msg) {
        show(msg);
    },
    warn(msg) {
        show(msg);
    },
}

export default popMessage;