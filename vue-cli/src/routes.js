import VueRouter from 'vue-router'
import Home from './components/Home.vue';
import WeatherApp from './components/weather-app/WeatherApp.vue';
import chatLogin from './components/chat/ChatLogin.vue';
import chatSignIn from './components/chat/ChatSignIn.vue';



const routes = [
    { 
        path: '/', 
        component: Home 
    },
    { 
        path: '/weather', 
        component: WeatherApp 
    },
    { 
        path: '/chatLogin', 
        component: chatLogin 
    },
    { 
        path: '/chatSignIn', 
        component: chatSignIn
    }
];

const router = new VueRouter({routes});


export default router;