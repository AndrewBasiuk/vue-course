<template>
    <div class="app-container">
        <input type="text" 
               placeholder="city"
               v-model="city"
               @keydown.enter="submit"
        >
        
        <transition name="fade">
            <DayList v-if="showList"
                :dataArr="sortDays"
            />
        </transition>

        <div class="error-popup" v-if="error">
            <p class="error-popup__text">wrong city</p>    
        </div>            
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
            error: true,
            sortDays: [],
            axios: require('axios')
        }
    },
    methods: {
        submit() {            
            this.showList = false; 

            let apiLink = 'http://api.openweathermap.org/data/2.5/forecast?q=' + this.city + '&appid=fc3da5f655d9b4c55ce7786120594255&units=metric';
            this.axios.get(apiLink)
                .catch(error => console.log(error))
                .then(response => (this.info = response.data))
                .then(() => {
                    this.showList = true; 
                    this.sortDays = this.sortObj;
                });
                
        console.log(this.sortDays);
            
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
            });        
    }
}
</script>

<style scoped>
    body {
        position: relative;
    }

    .error-popup {
        width: 500px;
        height: 300px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);    
        border: 5px solid #000;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-family: Arial;
        font-size: 40px;
        text-transform: uppercase;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 1s;
    }
    
    .fade-enter, .fade-leave-to  {
        opacity: 0;
    }
</style>


