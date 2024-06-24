import { createRouter, createWebHistory } from 'vue-router';
import WeatherForecast from '../components/WeatherForecast';
const routes = [
    {
        path: '/',
        name: 'Home',
        component: WeatherForecast,
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;