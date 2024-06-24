<template>
    <v-card class="weather-hrs-card ml-3" variant="flat">
        <p class="weather-info text-Subtitle 1 font-weight-bold">{{ Math.floor(forecast.temperature) }}°C</p>
        <p class="weather-precipitation mt-2 text-subtitle-2">
            <v-icon color="#0bb1bb" icon="mdi-weather-pouring" size="x-small"></v-icon>
            {{ Math.floor(forecast.precipitationPercentage) }}%
        </p>
        <p class="d-flex justify-center"><v-img :src="forecast.iconUrl" alt="Weather Icon" class="weather-icon"></v-img></p>
        <p class="weather-time text-caption">{{ forecast.time }}</p>
    </v-card>
</template>
<script>
export default {
    name: 'WeatherCard',
    props: {
        forecast: {
            type: Object,
            required: true,
        },
    },
};
</script>
<style scoped>
.weather-hrs-card {
    width: 100%;
    margin: 10px 0;
    text-align: center;
    color: #333;
    padding: 5px;
    background-color: #d1d1d1;
    border: solid 1px rgb(221, 218, 218);
}

.weather-time {
    color: #2d2828;
}

.weather-precipitation {
    color: #0bb1bb;
}

.weather-info {
    /* color: rgb(37 229 235); */
    text-align: center;
    font-weight: bold;
    font-size: 15px;
}

.weather-icon {
    width: 70px;
    height: 70px;
    text-align: center;
}
</style>