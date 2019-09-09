<template>
    <ul class="day-list">
        <li class="day-list__item" v-for="(day, index) in dataArr" :key="index">
            <div class="day-list__day">{{ dates[index]["day"] }} {{ dates[index]["month"] }}</div>
            <div class="day-list__temp">{{ temperatures[index]["temp"] }}</div>
        </li>
    </ul>
</template>

<script>
export default {
    name: "DayList",
    props: {
        dataArr: Array,
        dataTest: ""
    },
    data() {
        return {
            dates: [],
            temperatures: {},
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
        }
    },
    created() {
        this.dates = this.getDate;
        this.temperatures  = this.getTemp;
    }
}
</script>

<style scooped>
    .day-list {
        width: 700px;
        margin: 30px auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .day-list__item {
        list-style: none;
    }
    .day-list__day {
        margin-bottom: 5px;
        font-weight: bold;
    }
</style>