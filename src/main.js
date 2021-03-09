import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import RegisterPage from "@/components/RegisterPage";

Vue.config.productionTip = false
Vue.component('Register', RegisterPage)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
