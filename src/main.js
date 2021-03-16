import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import RegisterPage from "@/components/RegisterPage";
import store from "./store";
// import { ValidationObserver, ValidationProvider} from 'vee-validate';

Vue.config.productionTip = false;
Vue.component("Register", RegisterPage);
// Vue.component('ValidationObserver', ValidationObserver);
// Vue.component('ValidationProvider', ValidationProvider);

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
