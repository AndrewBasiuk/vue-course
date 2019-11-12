<template>
    <div class="component-wrapper">
       <div class="sign-in sign-in">
           <p class="sign-in__heading">Sign in</p>

           <input name="email" 
                  type="text" 
                  class="sign-in__input" 
                  placeholder="Email" 
                  v-model="email"
                  @keyup.enter="submit"
            >

           <input name="password" 
                  type="text" 
                  class="sign-in__input" 
                  placeholder="Password" 
                  v-model="password"
                  @keyup.enter="submit"
            >  

           <p class="sign-in__error" v-if="showError">{{errorName}}</p>

           <button  class="sign-in__button"
                    @click="submit"
           >
               Sign In
            </button>
            <p class="sign-in__text">
                or <a href="#" class="sign-in__link" @click.prevent="openLoginWindow">create new account</a>
            </p>
       </div>
      
    </div>
</template>

<script>
import router from './../../routes';
import firebase from "firebase/app";

/* global require */
export default {
    name: "ChatSignIn",
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
                return true;
            }
        },
        createNewUser() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                () => {
                    router.push('chat');
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
            }, 1500)
        },
        openLoginWindow() {
            router.push('chatLogin');
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

    .sign-in {
        width: 500px;
        padding: 50px 20px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .sign-in__heading {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 25px;
        text-transform: uppercase;
    }

    .sign-in__input {
        border: none;
        border-bottom: 1px solid gray;
        padding: 10px;
        width: 300px;
        font-size: 16px;
        margin-bottom: 30px;
        color: gray;
        transition: all 0.2s;
        outline: none;
        box-sizing: border-box;
    }
    .sign-in__input:focus {
        border-width: 2px;
        border-color: #000;
        color: #000;
    }

    .sign-in__text {
        font-size: 18px;
    }

    .sign-in__button {
        width: 140px;
        margin-bottom: 20px;
        line-height: 30px;
        font-size: 14px;
        background-color: blue;
        color: #fff;
        border: none;
        cursor: pointer;
        outline: none;
        transition: all 0.2s;
    }
    .sign-in__button:hover {
        box-shadow: 0px 2px 3px 2px rgba(0, 8, 245, 0.4);
    }

    .sign-in__error {
        color: red;
        font-size: 16px;
        margin-bottom: 10px;
    }

</style>


