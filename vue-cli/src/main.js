import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'
import App from './App.vue'

import 'axios/dist/axios.min.js'
import router from './routes'
import firebaseApp from './firebase/init'

Vue.use(VueMeta)
Vue.use(VueRouter)
Vue.use(firebaseApp)


Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
