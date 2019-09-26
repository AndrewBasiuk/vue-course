

<template>
  <div id="app">    
    <!-- <WeatherApp v-if="weather"
                @click="showWork"
    />

    <newComponent v-if="newPage" 
                  @click="showWork"
    /> -->

    <router-link to='/'>Home</router-link>
    <router-link to='/weather'>Register</router-link>
    <router-link to='/page'>Login</router-link>
    <router-view></router-view>

    
  </div>
</template>

<script>


// import WeatherApp from './components/weather-app/WeatherApp.vue';
// import newComponent from './components/newPage/newPage.vue';


export default {
  name: 'app',
  
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


