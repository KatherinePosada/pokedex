import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from "bootstrap-vue";
import SuiVue from 'semantic-ui-vue';

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(SuiVue);

new Vue({
  render: h => h(App),
}).$mount('#app')
