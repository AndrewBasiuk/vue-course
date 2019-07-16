

<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <myComponent :msg='msg'/>
    <div>{{info[0]}}</div>
    <p v-for="(item) in info" :key="item.id">
      {{item.title}}, {{key}}
    </p>
    <button @click="greet">watch comsole</button>
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
      info: []
    }
  },
  methods: {
    greet() {
      
    }
  },
  mounted() {
    const axios = require('axios');
    axios.get('http://jsonplaceholder.typicode.com/posts')
         .then(response => (this.info = response.data));
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
