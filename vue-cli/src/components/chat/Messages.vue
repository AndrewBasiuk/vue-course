<template>
    <div class="component-wrapper">
        <div class="messages">
            <div class="messages__window"></div>
            <input type="text" class="messages__send" v-model="city">
            <!-- <p>{{city}}</p> -->
        </div>
    </div>
</template>

<script>
// import importComponent from "./importComponent";

/* global require */
export default {
    name: "Messages",
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
    .component-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
    }

    .messages {
        display: flex;
        flex-direction: column;
    }

    .messages__window {
        width: 500px;
        height: 300px;
        margin-bottom: 40px;
        border: 1px solid #000;
    }

    .messages__send {
        width: 500px;
        height: 30px;
        font-size: 18px;
    }
</style>

