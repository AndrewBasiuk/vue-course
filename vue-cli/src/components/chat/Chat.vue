<template>
    <div class="component-wrapper">
       <div class="login" v-if="login">
           <input name="email" type="text" class="login__input" placeholder="email" v-model="email">
           <input name="password" type="text" class="login__input" placeholder="password" v-model="password">  
           <button type="submit" 
                   class="login__button"
                   @click="submit"
           >
               Login
            </button>
       </div>
       <Messages v-else/>
    </div>
</template>

<script>
import Messages from "./Messages.vue";
import firebase from "firebase/app"

/* global require */
export default {
    name: "Chat",
    components: {
        Messages
    },
    data() {
        return {
            email: "",
            password: "",
            login: true
        }
    },
    methods: {
        submit() {
            // this.login = !this.login;
            
            // create new user
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                function(user) {
                    console.log(user);
                },
                function(err) {
                    console.log(err);
                }
            );        
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


