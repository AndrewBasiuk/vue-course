import firebase from "firebase/app"
require('firebase/auth');

var firebaseConfig = {
    apiKey: "AIzaSyBv7We95zcB6n-EpZic0eNW2eloJ6v6T0Q",
    authDomain: "vue-dat.firebaseapp.com",
    databaseURL: "https://vue-dat.firebaseio.com",
    projectId: "vue-dat",
    storageBucket: "vue-dat.appspot.com",
    messagingSenderId: "280870942824",
    appId: "1:280870942824:web:9859e3d6e88f29424de3dd"
  };

  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp;
