<template>
    <div class="weather-app">
        <!-- <img class="bg-image" alt="background-image" src="../../img/3.jpg"> -->
        <div class="bg-image"></div>

        <div class="weather-wrap">
            <div class="app-container">
                <input class="input"
                    type="text" 
                    placeholder="Enter youre city"
                    v-model="city"
                    @keydown.enter="submit"
                >
                
                <transition name="fade">
                    <DayList v-if="showList"
                        :dataArr="sortDays"
                    />
                </transition>

                <transition name="bounce">
                    <div class="error-popup" v-if="errorFlag">
                        <p class="error-popup__text">you entered the wrong city name. <br> Please try again</p>    
                    </div>   
                </transition>         
            </div>
        </div>
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
            city: "",
            showList: false,
            info: {},
            errorFlag: false,
            sortDays: [],
            axios: require('axios')
        }
    },
    methods: {
        submit() {            
            this.showList = false; 

            let apiLink = 'http://api.openweathermap.org/data/2.5/forecast?q=' + this.city + '&appid=fc3da5f655d9b4c55ce7786120594255&units=metric';
            this.axios.get(apiLink)
                .catch(error => (this.errorFlag = true))
                .catch(error => (setTimeout(() => {
                    this.errorFlag = false
                }, 3000)))
                .then(response => (this.info = response.data))
                .then(() => {
                    if (this.city) {
                        this.showList = true; 
                        this.sortDays = this.sortObj;
                    }
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
            });        
    }
}
</script>

<style scoped>
    body {
        position: relative;
    }

    .weather-app {
        position: relative;
        overflow: hidden;
    }

    .weather-wrap {
        width: 100%;
        height: 100vh;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        background-color: rgba(0, 0, 0, 0.3);
        z-index: 1;
    }

    .bg-image {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        z-index: -1;
        transform: scale(0);
        transform-origin: top left;
        background-image: url("./../../img/3.jpg");
        background-position: center center;
        background-size: cover; 
        animation: background-move 90s linear infinite forwards;
    }
    @keyframes background-move{
        /* from {background-position: center center;}
        to {background-position: top left;} */
        from {
            transform: scale(1);
            transform-origin: top left;
        }
        25% {
            transform-origin: top right;
        }
        30% {
            transform: scale(1.3);
        }
        50% {
            transform-origin: bottom left;
        }
        60% {
            transform: scale(1.3);
        }
        75% {
            transform-origin: bottom right;
        }
        to {
            transform: scale(1);
            transform-origin: top left;
        }
    }

    .error-popup {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        transform: scale(0);
    }
    .error-popup p {
        border: 3px solid red;
        color: red;
        padding: 20px 40px;
        font-weight: bold;
        font-family: Arial;
        font-size: 40px;
        text-transform: uppercase;
    }

    .input {
        border: none;
        border-bottom: 2px solid #000;
        padding: 7px 10px;
        outline: none;
        font-size: 20px;
        width: 300px;
        margin-bottom: 100px;
        text-align: center;
        background-color: transparent;
        color: #fff;
    }
    .input:focus {
        border-color: green;
        opacity: 1;

    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.5s;
    }
    
    .fade-enter, .fade-leave-to  {
        opacity: 0;
    }

    .bounce-enter-active {
        animation: bounce-in 3s;
    }
    .bounce-leave-active {
        animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        10% {
            transform: scale(1.5);
        }
        15% {
            transform: scale(1);
        }
        79% {
            transform: scale(1);
        }
        80% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(0);
        }
    }
    
</style>


