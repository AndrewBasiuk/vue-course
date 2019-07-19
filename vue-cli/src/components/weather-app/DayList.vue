<template>
    <ul class="day-list">
        <li v-for="(day, index) in dataArr" :key="index">
            <div>{{ dates[index]["day"] }}</div>
            <div>{{ temperatures[index]["tempMin"] }}</div>
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
            temperatures: {}
        }
    },
    computed: {
        getDate() {
            let arr = []; 

            this.dataArr.forEach(element => {
                let fullDate = element.dt_txt.split(" ")[0],
                    fullDateArr = fullDate.split("-");
                
                arr.push(
                    {
                        day: fullDateArr[2],
                        month: fullDateArr[1],
                        year: fullDateArr[0]    
                    }
                );
            });

            return arr;
        },
        getTemp() {
            let arr = [];

            this.dataArr.forEach(element => {

                this.dataArr.forEach(element => {
                    arr.push(
                        {
                            temp: element.main.temp,
                            tempMin: element.main.temp_min,
                            tempMax: element.main.temp_max    
                        }
                    );
                });
            });

            return arr;
        }
    },
    mounted() {
        this.dates = this.getDate;
        this.temperatures  = this.getTemp;
    }
}
</script>
