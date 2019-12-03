<template>
    <div class="component-wrapper">
        <ul class="messages-window">
            <li class="messages-window__item" v-for="(item, i) in messagesData" :key="i">
                <span>{{item.time}}</span>
                <span>{{item.mess}}</span>
            </li>
        </ul>
        <div class="input-window">
            <p>User name: {{userData.name}}</p>
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
            userData: {},
            message: "",
            counter: 0,
            resivedData: [],
            messagesData: [],
            firestore: firebase.firestore()
        }
    },
    methods: {
        sendMessage() {
            // write data to database
            this.firestore.collection("messages").doc().set({

                fullTime: this.getTime().fullTime,
                userName: this.userData.name,
                time: this.getTime().time,
                value: this.message

            });

            this.message = "";
        },
        getTime() {
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
        // scrollMessageWindowToBottom() {
        //     let messageWindow = document.querySelector(".messages-window");

        //     messageWindow.scrollTop = 50;
        //         console.log(messageWindow.scrollTop);

        // }
        listener() {
            this.firestore.collection("messages").doc().get().then(() => {

                this.firestore.collection("messages").onSnapshot((mess) => {

                    if (mess.docs.lenght != 0) {

                        this.resivedData = []; //clear arr

                        // get only data
                        mess.docs.forEach(el => {
                            this.resivedData.push(el.data());
                        });

                        let sortingData = this.mesaggesTimeSorting,
                            lastMessageData = sortingData[sortingData.length-1];
                   
                        this.messagesData.push({
                            time: lastMessageData.time,
                            mess: lastMessageData.value
                        });
                    }

                });
            });
        },
        mesaggesTimeSorting() {
            let data = this.resivedData,
                arrLength = data.length-1;

            for(let i = 0; i <= arrLength; i++) {

                for(let j = 0; j < arrLength-i; j++) {  
                    if(data[j].fullTime > data[j+1].fullTime) {
                        let next = data[j+1];
                        data[j+1] = data[j];
                        data[j] = next;
                    }
                }

            }

            return data;
        },
        getUserInfo() {

            let obj = {};

            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    obj.name = user.displayName;
                } else {
                    obj.name = "no_name";
                }
            });

            this.userData = obj;

            return obj;
        }
    },
    created() {
        this.getUserInfo;

        this.firestore.collection("messages").orderBy("fullTime").get().then((mess) => {
             if (mess.docs.lenght != 0) {

                this.resivedData = []; //clear arr

                // get only data
                mess.docs.forEach(el => {
                    this.resivedData.push(el.data());
                });

                let sortingData = this.mesaggesTimeSorting;
                
                for (let i = 0; i <= sortingData.lenght-2; i++) {
                    this.messagesData.push({
                        time: sortingData[i].time,
                        mess: sortingData[i].value
                    });
                }
            }
        });
    },
    mounted() {
        // this.getUserInfo;
        this.listener;
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


