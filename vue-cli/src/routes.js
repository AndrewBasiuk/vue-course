
import WeatherApp from './components/weather-app/WeatherApp.vue';
import newComponent from './components/newPage/newPage.vue';

const routes = [
    { path: '/components/weather-app', component: WeatherApp },
    { path: '/components/newPage', component: newComponent },
];

export default routes;