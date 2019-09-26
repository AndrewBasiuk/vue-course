import Home from './Home.vue';
import WeatherApp from './components/weather-app/WeatherApp.vue';
import newComponent from './components/newPage/newPage.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/weather', component: WeatherApp },
    { path: '/page', component: newComponent },
];

export default routes;