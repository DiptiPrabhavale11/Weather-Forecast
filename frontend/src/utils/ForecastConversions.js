import DateConversions from "./DateConversions";
//Convert the Forecast API reponse
const convertForecast = (forecast) => {
    const convertedObj = {
        dt: forecast.dt,
        time: new Date(forecast.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        date: DateConversions.convertDate(new Date(forecast.dt * 1000), true),
        temperature: forecast.main.temp,
        weather: forecast.weather[0].description,
        minTemp: forecast.main.temp_min,
        maxTemp: forecast.main.temp_max,
        precipitationPercentage: forecast.pop * 100,
        feelsLike: forecast.main.feels_like,
        iconUrl: `http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`,
    }
    return convertedObj;
}

//Filter the Forecast data and extract data for next few hours 
const hourlyfilteredForescast = (forecastData, hrs) => {
    const currentTime = new Date();
    const endTime = new Date(currentTime.getTime() + hrs * 60 * 60 * 1000);
    return forecastData.filter(forecast => {
        const forecastTime = new Date(forecast.dt * 1000);
        return forecastTime >= currentTime && forecastTime <= endTime;
    })
}

//Filter the Forecast data and extract data for 5 days
const daywiseFilteredForecast = (forecastData) => {
    const filteredData = [];
    const seenDates = new Set();

    forecastData.forEach(forecast => {
        const date = new Date(forecast.dt * 1000)
        const dateStr = date.toDateString();
        const hrs = date.getHours();

        if (!seenDates.has(dateStr) && (hrs >= 6 && hrs <= 11)) {
            filteredData.push(forecast);
            seenDates.add(dateStr);
        }
    });

    return filteredData;
}
export default { convertForecast, hourlyfilteredForescast, daywiseFilteredForecast };