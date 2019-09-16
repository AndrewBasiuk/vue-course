

<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    
    <WeatherApp 
    
    />
    
  </div>
</template>

<script>


import WeatherApp from './components/weather-app/WeatherApp.vue';


export default {
  name: 'app',
  components: {
    WeatherApp
  }
}
</script>


