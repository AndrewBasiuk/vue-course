<template>
    <div class="component-wrapper">
        <p>User name: {{userName}}</p>
        <input type="text" v-model="message" @keydown.enter="add">
        <button @click="add">Click</button>
    </div>
</template>

<script>
import firebase from "firebase/app"



export default {
    name: "ChatWindow",
    data() {
        return {
            userName: "",
            message: "",
            counter: 0,
            arr: [],
            messagesDB: firebase.firestore().collection("messages")
        }
    },
    methods: {
        add() {
            this.messagesDB.doc().set({

                time: this.date(),
                value: this.message

            }).then(() => {

                firebase.firestore().collection("messages").orderBy("time", "desc").onSnapshot((mess) => {
                        let lastMessages = mess.docs[0].data();
                        console.log(lastMessages);
                });

            });

            this.message = "";
        },
        date() {
            let date = new Date(),
                time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

            return time;
        }
    },
    created() {

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.userName = user.displayName;
            } else {
                this.userName = "no_name";
            }
        });

        firebase.firestore().collection("messages").orderBy("time", "desc").onSnapshot((mess) => {
                let lastMessages = mess.docs[0].data();
                console.log(lastMessages);
        });


        // messagesDB.get().then((snapshot) => {
        //     snapshot.docs.forEach(el => {
        //         console.log(el);
        //     });
        // });

        // this.messagesDB.onSnapshot(function(docs) {
        //     docs.forEach(el => {
        //         console.log(el.data());
        //     });
        // });
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


