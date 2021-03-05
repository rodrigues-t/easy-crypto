import Vue from "vue";
import VueI18n from 'vue-i18n';
import enus from './enus';
import ptbr from './ptbr';

Vue.use(VueI18n);

const messages = {
    'en-US': {
        message: enus
    },
    'pt-BR': {
        message: ptbr
    }
}

const i18n = new VueI18n({
    locale: 'en-US',
    messages,
})

export default i18n;