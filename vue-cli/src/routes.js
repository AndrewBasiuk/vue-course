import VueRouter from 'vue-router'
import Home from './components/Home.vue';
import WeatherApp from './components/weather-app/WeatherApp.vue';
import ChatLogin from './components/chat/ChatLogin.vue';
import ChatSignIn from './components/chat/ChatSignIn.vue';
import ChatWindow from './components/chat/ChatWindow.vue';




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
        component: ChatLogin 
    },
    { 
        path: '/chatSignIn', 
        component: ChatSignIn
    },
    { 
        path: '/chat/:userId',
        name: 'chat',
        component: ChatWindow
    }
];

const router = new VueRouter({routes});


export default router;