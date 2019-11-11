<template>
    <div class="component-wrapper">
       <div class="login">
           <p class="login__heading">Create Account</p>
           <input name="email" 
                  type="text" 
                  class="login__input" 
                  placeholder="email" 
                  v-model="email"
                  @keyup.enter="submit"
            >

           <input name="password" 
                  type="text" 
                  class="login__input" 
                  placeholder="password" 
                  v-model="password"
                  @keyup.enter="submit"
            >  

           <p v-if="showError" class="login__error">{{errorName}}</p>

           <button class="login__button"
                   @click="submit"
           >
               Login
            </button>
       </div>
    </div>
</template>

<script>
import firebase from "firebase/app";

/* global require */
export default {
    name: "ChatLogin",
    data() {
        return {
            email: null,
            password: null,
            showError: false,
            errorName: ''
        }
    },
    methods: {
        submit() {

            if (this.validation()) {
                this.createNewUser();
            }
  
        },
        validation() {
            if (!this.email || !this.password) {
                this.setError("empty email or password field");
                return false;
            } else {
                if (!this.validEmail(this.email)) {
                    this.setError("invalid email");
                    return false;
                }

                return true;
            }
        },
        validEmail(email) {
            let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },
        createNewUser() {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                (user) => {
                    console.log(user);
                },
                (err) => {
                    this.setError(err.message);
                }
            );
        },
        setError(err) {
            this.errorName = err;
            this.showError = true;

            setTimeout(() => {
                this.showError = false;
            }, 2000)
        }
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
    }

    .login__heading {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 25px;
        text-transform: uppercase;
    }

    .login__input {
        border: none;
        border-bottom: 1px solid gray;
        padding: 10px;
        width: 300px;
        font-size: 16px;
        margin-bottom: 30px;
        color: gray;
        transition: all 0.2s;
        outline: none;
    }
    .login__input:focus {
        border-width: 2px;
        border-color: #000;
        color: #000;
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

    .login__error {
        color: red;
        font-size: 16px;
        margin-bottom: 10px;
    }

</style>


