<template>
    <div class="app-container">
        <input type="text" 
               placeholder="city"
               v-model="city"
               @submit="submit"
        >
        
        <DayList v-if="showList"
                 :dataArr="sortDays"
        />
        <!-- <div >{{info}}</div> -->
        <!-- <button @click="buttonClick">Click</button> -->
            
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
            sortDays: [],
            axios: require('axios')
        }
    },
    methods: {
        // buttonClick() {
        //     // this.sortDays = this.sortObj;
        //     console.log(this.sortDays);            
        // },
        submit() {
            this.axios.get('http://api.openweathermap.org/data/2.5/forecast?q=' + this.city + '&appid=fc3da5f655d9b4c55ce7786120594255&units=metric')
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
        this.axios.get('http://api.openweathermap.org/data/2.5/forecast?q=London&appid=fc3da5f655d9b4c55ce7786120594255&units=metric')
            .then(response => (this.info = response.data))
            .then(() => {
                this.showList = true; 
                this.sortDays = this.sortObj;
            });
    }
}
</script>

<style scoped>
    
</style>


