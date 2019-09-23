

<template>
  <div id="app">    
    <WeatherApp v-if="weather"
                @click="showWork"
    />

    <newComponent v-if="newPage" 
                  @click="showWork"
    />
    
  </div>
</template>

<script>


import WeatherApp from './components/weather-app/WeatherApp.vue';
import newComponent from './components/newPage/newPage.vue';


export default {
  name: 'app',
  components: {
    WeatherApp,
    newComponent
  },
  data() {
    return {
      weather: true,
      allworks: [
        {Weather: true},
        {newPage: false}
      ]
    }
  }
}
</script>


