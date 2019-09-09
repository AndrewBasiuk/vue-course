<template>
    <div class="app-container">
        <input type="text" 
               placeholder="city"
               v-model="city"
               @keydown.enter="submit"
        >
        
        <DayList v-if="showList"
                 :dataArr="sortDays"
        />

            
    </div>
</template>

<script>
import DayList from "./DayList.vue";
import { log } from 'util';

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
            city: "Lviv",
            showList: false,
            info: {},
            sortDays: [],
            axios: require('axios')
        }
    },
    methods: {
        submit() {            
            this.showList = false; 

            let apiLink = 'http://api.openweathermap.org/data/2.5/forecast?q=' + this.city + '&appid=fc3da5f655d9b4c55ce7786120594255&units=metric';
            this.axios.get(apiLink)
                .then(response => (this.info = response.data))
                .then(() => {
                    this.showList = true; 
                    this.sortDays = this.sortObj;
                });                  
        }
    },
    computed: {
        sortObj() {
            let allList = this.info.list,
                time = "15:00:00",
                days = [];             

            allList.forEach(function(item) {
                if (item.dt_txt.indexOf(time) != -1) {
                    days.push(item);
                }
            });            
            
            return days;
        }
    },
    mounted() {
        let apiLink = "http://api.openweathermap.org/data/2.5/forecast?q=" + this.city + "&appid=fc3da5f655d9b4c55ce7786120594255&units=metric";
        this.axios.get(apiLink)
            .then(response => (this.info = response.data))
            .then(() => {
                this.showList = true; 
                this.sortDays = this.sortObj;
                this.a = this.sortDays[4].main.temp;
            });
    }
}
</script>

<style scoped>
    
</style>


