<template>
    <ul class="day-list">
        <li class="day-list__item" v-for="(day, index) in dataArr" :key="index">
            <div class="day-list__day">{{ dates[index]["day"] }} <br> {{ dates[index]["month"] }}</div>
            <img :src="'http://openweathermap.org/img/wn/' + weatherIcon[index] + '.png'" alt="icon">
            <div class="day-list__temp">{{ temperatures[index]["temp"] }} ºC</div>
        </li>
    </ul>
</template>

<script>
export default {
    name: "DayList",
    props: {
        dataArr: Array
    },
    data() {
        return {
            dates: [],
            temperatures: {},
            weatherIcon: [],
            months: [
                {
                    id: "01",
                    name: "January"
                },
                {
                    id: "02",
                    name: "February"
                },
                {
                    id: "03",
                    name: "March"
                },
                {
                    id: "04",
                    name: "April"
                },
                {
                    id: "05",
                    name: "May"
                },
                {
                    id: "06",
                    name: "June"
                },
                {
                    id: "07",
                    name: "July"
                },
                {
                    id: "08",
                    name: "August"
                },
                {
                    id: "09",
                    name: "September"
                },
                {
                    id: "10",
                    name: "October"
                },
                {
                    id: "11",
                    name: "November"
                },
                {
                    id: "12",
                    name: "December"
                }
            ] 
        }
    },
    computed: {
        getDate() {
            let arr = []; 
            let that = this;

            function getMonthName(num) {
                let name = "";

                that.months.forEach(element => {
                    if (num == element.id) {
                        name = element.name;
                    }
                });

                return name;
            }

            this.dataArr.forEach((element) => {
                let fullDate = element.dt_txt.split(" ")[0],
                    fullDateArr = fullDate.split("-");
                
                let month = getMonthName(fullDateArr[1]);

                arr.push(
                    {
                        "day": fullDateArr[2],
                        "month": month,
                        "year": fullDateArr[0]    
                    }
                );
            });

            return arr;
        },
        getTemp() {
            let arr = [];

            this.dataArr.forEach(element => {
                    arr.push(
                        {
                            temp: element.main.temp,
                            tempMin: element.main.temp_min,
                            tempMax: element.main.temp_max    
                        }
                    );
                });

            return arr;
        },
        getWeatherIcon() {
            let arr = [];

            this.dataArr.forEach(element => {
                    arr.push(element.weather[0].icon);
                });

            return arr;
        }
    },
    created() {
        this.dates = this.getDate;
        this.temperatures  = this.getTemp;
        this.weatherIcon  = this.getWeatherIcon;
    }
}
</script>

<style scooped>
    .day-list {
        width: 900px;
        padding: 0 10px;
        box-sizing: border-box;
        margin: 30px auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        color: #000;
    }
    .day-list__item {
        list-style: none;
        padding: 30px 20px;
        background-color: rgba(255, 255, 255, 0.4);
    }
    .day-list__day {
        margin-bottom: 5px;
        font-weight: bold;
    }

    @media screen and (max-width: 900px) {
        .day-list {
            width: 100%;
            flex-wrap: wrap;
        }
    }

    @media screen and (max-width: 700px) {
        .day-list {
            width: 100%;
            justify-content: flex-start;
            flex-wrap: wrap;
        }
        .day-list__item {
            box-sizing: border-box;
            width: 31%;
            margin-right: 3.5%;
            margin-bottom: 20px;
        }
        .day-list__item:nth-child(3n), .day-list__item:last-child {
            margin-right: 0;
        }
    }

    @media screen and (max-width: 400px) {
        .day-list__item {
            width: 47%;
            margin-right: 6%;
        }
        .day-list__item:nth-child(3n) {
            margin-right: 6%;
        }
        .day-list__item:nth-child(2n), .day-list__item:last-child {
            margin-right: 0;
        }
    }
</style>