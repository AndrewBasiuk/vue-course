<template>
    <div class="component-wrapper">
       <div class="login" v-if="login">
           <input type="text" class="login__input">
           <button type="submit" 
                   class="login__button"
                   @click="submit"
           >
               Login
            </button>
       </div>
       <ChatWindow v-else/>
    </div>
</template>

<script>
import ChatWindow from "./ChatWindow.vue";

/* global require */
export default {
    name: "Chat",
    components: {
        ChatWindow
    },
    data() {
        return {
            login: true
        }
    },
    methods: {
        submit() {
            this.login = !this.login;
        }
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

    .login {
        width: 500px;
        padding: 50px 20px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        flex-direction: column;
        border: 2px solid #000;
    }

    .login__input {
        border: 1px solid #000;
        padding: 10px;
        width: 300px;
        font-size: 16px;
        margin-bottom: 30px;
        text-align: center;
    }

    .login__button {
        width: 140px;
        line-height: 30px;
        font-size: 14px;
        background-color: blue;
        color: #fff;
        border: none;
        cursor: pointer;
        outline: none;
        transition: all 0.2s;
    }
    .login__button:hover {
        box-shadow: 0px 2px 3px 2px rgba(0, 8, 245, 0.4);
    }

</style>


