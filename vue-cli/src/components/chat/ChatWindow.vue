<template>
    <div class="component-wrapper">
        <ul class="messages-window">
            <li class="messages-window__item" v-for="(item, i) in messagesData" :key="i">
                <span>{{item.time}}</span>
                <span>{{item.mess}}</span>
            </li>
        </ul>
        <div class="input-window">
            <p>User name: {{userName}}</p>
            <input type="text" v-model="message" @keydown.enter="sendMessage">
            <button @click="sendMessage">Click</button>
        </div>
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
            messagesData: [
            ],
            messagesDB: firebase.firestore().collection("messages")
        }
    },
    methods: {
        sendMessage() {
            // write data ti database
            this.messagesDB.doc().set({

                fullTime: this.getDate().fullTime,
                time: this.getDate().time,
                value: this.message

            });

            this.message = "";
        },
        getDate() {
            let date = new Date(),
                fullTime = Date.now(),
                time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

            return {
                time: time,
                fullTime: fullTime
            };
        }
    },
    computed: {
        scrollMessageWindowToBottom() {
            let messageWindow = document.querySelector(".messages-window");

            messageWindow.addEventListener("scroll", () => {
                // console.log(messageWindow.scrollTop);
            });

            messageWindow.scrollTop = 50;
                console.log(messageWindow.scrollTop);

        }
    },
    created() {

        // get the existing data from database
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.userName = user.displayName;
            } else {
                this.userName = "no_name";
            }
        });

        this.messagesDB.orderBy("fullTime").get().then((mess) => {
            let allMessages = mess.docs;

            if(allMessages.length != 0) {

                allMessages.forEach((el, i) => {
                    let itemData = el.data();

                    this.messagesData.push({
                        time: itemData.time,
                        mess: itemData.value
                    });
                });

            }
        });
    },
    mounted() {
        this.scrollMessageWindowToBottom;
        // get realtime updates from database
        this.messagesDB.doc().get().then(() => {

            this.messagesDB.orderBy("fullTime", "desc").onSnapshot((mess) => {

                let lastMessages = mess.docs[0];

                if(lastMessages) {
                    let lastMessagesData = lastMessages.data();

                    this.messagesData.push({
                        time: lastMessagesData.time,
                        mess: lastMessagesData.value
                    });
                    
                }
            });

            this.scrollMessageWindowToBottom;
        });
    }
}
</script>

<style scoped>
    .component-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
    }
    .messages-window {
        border: 1px solid #000;
        padding: 20px 30px;
        width: 300px;
        height: 300px;
        overflow: scroll;
    }
    .messages-window__item {
        list-style: none;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .messages-window__item:last-child {
        margin-bottom: 0;
    }
    .input-window {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>


