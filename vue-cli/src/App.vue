

<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    
    <weatherApp 
    
    />
    
  </div>
</template>

<script>


import weatherApp from './components/weatherApp.vue';

export default {
  name: 'app',
  components: {
    weatherApp
  },
  data() {
    return {
      
    }
  },
  methods: {
    
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
