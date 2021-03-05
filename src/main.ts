import Vue from "vue";
import router from "./router";
import store from "./store";
import './assets/styles/index.css'
import App from "./App.vue";
import i18n from '@/shared/i18n'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  i18n
}).$mount("#app");
