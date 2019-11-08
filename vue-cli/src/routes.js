import VueRouter from 'vue-router'
import Home from './components/Home.vue';
import WeatherApp from './components/weather-app/WeatherApp.vue';
import chat from './components/chat/Chat.vue';


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
        path: '/live-chat', 
        component: chat 
    }
];

const router = new VueRouter({routes});


export default router;