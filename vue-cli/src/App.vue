

<template>
  <div id="app">    
    <WeatherApp/>
    
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


