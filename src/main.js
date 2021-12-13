import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import setAuthHeader from "./components/Header/setAuthHeader"

import VueAxios from 'axios'
import axios from 'axios';
Vue.use(VueAxios,axios)

Vue.config.productionTip = false;


if(localStorage.Token){
  setAuthHeader(localStorage.Token)
}
else{
  setAuthHeader(false);
}


new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
