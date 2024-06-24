import axios from 'axios';
import ForecastConversions from '../utils/ForecastConversions';

const getData = async (url) => {
    const response = await axios.get(url);
    return response.data;
}
const getWeatherData = async (config) => {
    const url = `${process.env.VUE_APP_API_URL}?lat=${config.lat}&lon=${config.lon}&appid=${config.apiKey}&units=metric`;
    try {
        const response = await axios.get(url);
        const data = response.data.list;
        const forecasts = data.map(forecast => (ForecastConversions.convertForecast(forecast)));
        return forecasts;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return [];
    }
}

export default { getWeatherData, getData }