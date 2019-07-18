<template>
    <div class="app-container">
        <input type="text" 
               placeholder="city"
               v-model="city"
               @submit="submit"
        >
        
        <DayList v-if="showList"
                 :info="info"
        />
        <!-- <div >{{info}}</div> -->
        <button @click="buttonClick">Click</button>
            
    </div>
</template>

<script>
import DayList from "./DayList.vue";

/* global require */
export default {
    name: "WeatherApp",
    components: {
        DayList
    },
    props: {
            
    },
    data() {
        return {
            city: "London",
            showList: false,
            info: {},
            axios: require('axios')
        }
    },
    methods: {
        buttonClick() {
            console.log(this.info);
        },
        submit() {
            this.axios.get('http://api.openweathermap.org/data/2.5/forecast?q=' + this.city + '&appid=fc3da5f655d9b4c55ce7786120594255&units=metric')
                .then(response => (this.info = response.data, console.log(this.info)));
        }
    },
    mounted() {
        this.axios.get('http://api.openweathermap.org/data/2.5/forecast?q=London&appid=fc3da5f655d9b4c55ce7786120594255&units=metric')
            .then(response => (this.info = response.data));

        this.showList = true;
    }
}
</script>

<style scoped>
    
</style>


