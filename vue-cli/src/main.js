import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'

import 'axios/dist/axios.min.js'
import App from './App.vue'


Vue.use(VueMeta)

Vue.config.productionTip = false

Vue.use(VueRouter)
import routes from './routes';
const router = new VueRouter({routes});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
