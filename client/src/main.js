import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { sync } from "vuex-router-sync";
import store from "./store";
import Panel from "./components/templates/Panel";

Vue.config.productionTip = false;

Vue.component("Panel", Panel);

sync(store, router);

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount("#app");
