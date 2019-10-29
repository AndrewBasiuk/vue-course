import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'

// import VueFire from 'vuefire'
// import firebase from 'firebase/app'
// import 'firebase/firestore'
// Vue.use(VueFire)
// firebase.initializeApp({
//  projectId: 'vue-dat', 
//  databaseURL: 'https://vue-dat.firebaseio.com'
// })
// export const db = firebase.firestore()

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
