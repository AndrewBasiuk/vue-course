import Vue from 'vue'
import VueRouter from 'vue-router'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'axios/dist/axios.min.js'

import App from './App.vue'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

import routes from './routes';

const router = new VueRouter({routes});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
