<template>
    <div class="component-wrapper">
        <p>User name: {{userName}}</p>
    </div>
</template>

<script>
import firebase from "firebase/app";


export default {
    name: "ChatWindow",
    data() {
        return {
            userName: " "
        }
    },
    methods: {
        
    },
    created() {
        let authInfo = firebase.auth(),
            user = authInfo.currentUser;

        if(user) {
            this.userName = user.displayName;
        }

        authInfo.onAuthStateChanged(function(user) {
            if (user) {
                console.log(user, "acsdc");
            } else {
                console.log("sdvsd");

            }
        });
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
</style>


