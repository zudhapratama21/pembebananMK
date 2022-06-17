import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import VueCookies from 'vue-cookies';
import VueJwtDecode from 'vue-jwt-decode';

import loader from "vue-ui-preloader";

Vue.use(loader);
Vue.use(VueJwtDecode)



Vue.config.productionTip = false

const options = {
  // You can set your default options here
};


Vue.use(Toast, options);
Vue.use(VueCookies, { expire: '1d'})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
