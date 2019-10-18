
<template>
    <div class="weather-app">
        <div class="bg-image" :class="[activeBackground]"></div>

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

                <transition name="error">
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
            activeBackground: "background_2",
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

            let apiLink = 'https://api.openweathermap.org/data/2.5/forecast?q=' + this.city + '&appid=fc3da5f655d9b4c55ce7786120594255&units=metric';
            this.axios.get(apiLink)
                .catch((error) => {
                    this.showList = false;
                    this.errorFlag = true;

                    setTimeout(() => {
                        this.errorFlag = false;
                    },1000)
                })
                .then((response) => {
                    this.info = response.data;
                    if (this.city) {
                        this.showList = true; 
                        this.sortDays = this.sortObj;
                    }
                })    
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
        },
        setBackgroundImage() {
            let month = new Date().getMonth();

            if (month == 11 || month == 0 || month == 1) {
                this.activeBackground = "background_0";
            } else if (month >= 2 && month <= 4) {
                this.activeBackground = "background_1";
            } else if (month >=5  && month <= 7) {
                this.activeBackground = "background_2";
            } else if (month >= 8 && month <= 10) {
                this.activeBackground = "background_3";
            }

            return false;
        }
    },
    mounted() {
        this.setBackgroundImage;
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
        background-color: rgba(0, 0, 0, 0.1);
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
        background-position: center center;
        background-size: cover; 
        animation: background-move 250s linear infinite forwards;
    }
    @keyframes background-move{
        from {
            transform: scale(1);
            transform-origin: top left;
        }
        25% {
            transform-origin: top right;
        }
        30% {
            transform: scale(1.2);
        }
        50% {
            transform-origin: bottom left;
        }
        60% {
            transform: scale(1.2);
        }
        75% {
            transform-origin: bottom right;
        }
        to {
            transform: scale(1);
            transform-origin: top left;
        }
    }
    .background_0 {
        background-image: url("./../../assets/img/0.jpg");
    }
    .background_1 {
        background-image: url("./../../assets/img/1.jpg");
    }
    .background_2 {
        background-image: url("./../../assets/img/2.jpg");
    }
    .background_3 {
        background-image: url("./../../assets/img/3.jpg");
    }

    .fade-enter-active, .fade-leave-active {
        transition: all 0.5s;
    }
    .fade-enter, .fade-leave-to  {
        opacity: 0;
        transform: translateY(50px)
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
        transform: scale(0);
    }
    .error-popup p {
        border: 3px solid red;
        background-color: red;
        color: #fff;
        padding: 20px 40px;
        font-weight: bold;
        font-family: Arial;
        font-size: 40px;
        text-transform: uppercase;
    }
    .error-enter-active {
        animation: bounce-in 3s;
    }
    .error-leave-active {
        animation: bounce-in 3s reverse;
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
        100% {
            transform: scale(1);
        }
    }

    .input {
        border: none;
        border-bottom: 2px solid #000;
        padding: 7px 15px;
        font-size: 24px;
        width: 280px;
        margin-bottom: 50px;
        text-align: left;
        background-color: transparent;
        color: #fff;
        background-color: rgba(0, 0, 0, 0.3);
    }
    .input:focus {
        border-color: #00ff44;
        background-color: #fff;
        color: #000;
    }
    .input::-webkit-input-placeholder {color: #fff; font-size: 22px; text-align: center; font-weight: 400;};
    .input::-moz-placeholder           {color: #fff; font-size: 22px; text-align: center; font-weight: 400;};
    .input::-ms-input-placeholder      {color: #fff; font-size: 22px; text-align: center; font-weight: 400;};
    
    .input:focus {
        border-color: #00ff44;
        background-color: #fff;
        color: #000;
    }
    
    @media screen and (max-width: 900px) {
        .app-container {
            width: 100%;
        }
    }

    @media screen and (max-width: 400px) {
        .weather-wrap {
            height: auto;
            min-height: calc(100vh - 300px);
            padding: 150px 0;
        }
    }
    
</style>


