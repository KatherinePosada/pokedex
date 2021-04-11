import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Vue from 'vue'
import App from './App.vue'
import BootstrapVueOK from "bootstrap-vue";
//import SuiVue from 'semantic-ui-vue';

Vue.config.productionTip = false

Vue.use(BootstrapVueOK);
//Vue.use(SuiVue);

new Vue({
  render: h => h(App),
}).$mount('#app')
