<template>
    <div class="app-container">
        <input type="text" 
               v-model="city"
               @keydown.enter="selectJson(currentType)"
        >

        <div class="tabs">
            <button class="tabs__item" 
                    v-for="(button, i) in buttons" 
                    :key="i"
                    @click="selectJson(i)"
            >
                {{ button.text }}
            </button>
        </div>


        <p>{{ info }}</p>

        <button @click="testClick">Click</button>
    
    </div>
</template>

<script>
/* global require */
export default {
    name: "weatherApp",
    props: {
            
    },
    data() {
        return {
            city: "London",
            info: [],
            axios: require('axios'),
            currentType: 0,
            buttons: [
                {
                    id: 0,
                    text: "today"
                },
                {
                    id: 2,
                    text: "5 days"
                },
                {
                    id: 3,
                    text: "16 days"
                }
            ],
            jsonLink: '',
        }
    },
    methods: {
        testClick() {
            // console.log("sdc");
        },
        selectJson(index) {
            let jsonArr = [
                'http://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&appid=fc3da5f655d9b4c55ce7786120594255&units=metric',
                'http://api.openweathermap.org/data/2.5/forecast?q=' + this.city + '&appid=fc3da5f655d9b4c55ce7786120594255&units=metric',
                'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + this.city + '&appid=fc3da5f655d9b4c55ce7786120594255&units=metric'
            ];

            this.currentType = index;

            this.axios.get(jsonArr[index])
                .then(response => (this.info = response.data));


            // this.submit(jsonArr[index]);
        },
        submit() {
            this.jsonLink = link;
            this.axios.get(this.jsonLink)
                .then(response => (this.info = response.data));
        }
    },
    computed: {

    },
    mounted() {
        this.jsonLink = 'http://api.openweathermap.org/data/2.5/weather?q=LONDON&appid=fc3da5f655d9b4c55ce7786120594255&units=metric';
        this.axios.get(this.jsonLink)
            .then(response => (this.info = response.data));
    }
}
</script>

<style scoped>
    .tabs {
        display: flex;
        justify-content: space-between;
        max-width: 400px;
        margin: 30px auto;
    }
</style>


