import Vue, {PluginFunction} from 'vue';
import {VuetifyUseOptions} from "vuetify";

export default class PopMessage {
    info: (msg: string) => void;
    success: (msg: string) => void;
    warn: (msg: string) => void;
    error: (msg: string) => void;

}

export interface PopMessageProps {
    bottom?: boolean;
    top?: boolean;
    left?: boolean;
    right?: boolean;
}
