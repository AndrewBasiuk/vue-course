import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'
import firebase from "firebase/app"
require('firebase/auth');
import App from './App.vue'

import 'axios/dist/axios.min.js'
import routes from './routes'
// import firebaseApp from './firebase/init'

Vue.use(VueMeta)
Vue.use(VueRouter)
const router = new VueRouter({routes});

require('firebase/auth');

var firebaseConfig = {
  apiKey: "AIzaSyBv7We95zcB6n-EpZic0eNW2eloJ6v6T0Q",
  authDomain: "vue-dat.firebaseapp.com",
  databaseURL: "https://vue-dat.firebaseio.com",
  projectId: "vue-dat",
  storageBucket: "vue-dat.appspot.com",
  messagingSenderId: "280870942824",
  appId: "1:280870942824:web:9859e3d6e88f29424de3dd"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
