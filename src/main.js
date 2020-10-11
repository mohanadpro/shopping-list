import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery";
import "popper.js";
import "./scss/index.scss";
import "./fontawesome/font-awesome-config";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
