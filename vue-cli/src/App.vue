

<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <myComponent :msg='msg'/>
    <div>{{info}}</div>
    <button @click="greet"></button>
  </div>
</template>

<script>
/* global require */
import myComponent from './components/myComponent.vue';

export default {
  name: 'app',
  components: {
    myComponent
  },
  data() {
    return {
      msg: "Hello World",
      info: {}
    }
  },
  methods: {
    greet() {
      console.log("dsf");
    }
  },
  mounted() {
    const axios = require('axios');
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then(response => (this.info = response));
  }
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
