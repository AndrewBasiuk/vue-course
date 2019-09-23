<template>
    <div class="component-wrapper">
        <input type="text" v-model="city">
        <p>{{city}}</p>
    </div>
</template>

<script>
// import importComponent from "./importComponent";

/* global require */
export default {
    name: "newComponent",
    // components: {
    //     importComponent
    // },
    props: {
            
    },
    data() {
        return {
            city: ""
        }
    },
    methods: {
        
    },
    computed: {
    
    },
    mounted() {
    }
}
</script>

<style scoped>
    
</style>


