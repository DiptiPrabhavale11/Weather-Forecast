<template>
    <v-card class="weather-card ml-3" variant="flat">
        <v-row class="pa-0">
            <v-col sm="1" md="2" lg="2">
                <v-img :src="forecast.iconUrl" alt="Weather Icon" class="weather-icon"></v-img>
            </v-col>
            <v-col sm="2" md="2" lg="2">
                <v-row class="mt-4">
                    <p class="text-subtitle-1 font-weight-bold">{{ forecast.date }}</p>
                </v-row>
                <v-row>
                    <p class="weather-time pa-0 text-body-1">{{ forecast.weather }} </p>
                </v-row>
            </v-col>

            <v-col sm="2" md="2" lg="2">
                <v-row class="mt-4">
                    <p class="text-subtitle-1 font-weight-medium"> {{ Math.floor(forecast.minTemp) }}°</p>
                </v-row>
                <v-row>
                    <p class="weather-text pa-0 text-caption">Min </p>
                    <v-icon class="pa-0 ml-1 mt-1" color="#727374" icon="mdi-arrow-down" size="x-small"></v-icon>
                </v-row>
            </v-col>

            <v-col sm="2" md="2" lg="2">
                <v-row class="mt-4">
                    <p class="text-subtitle-1 font-weight-medium">{{ Math.floor(forecast.maxTemp) }}°</p>
                </v-row>
                <v-row>
                    <p class="weather-text pa-0 text-caption">Max </p>
                    <v-icon class="pa-0 ml-1 mt-1" color="#727374" icon="mdi-arrow-up" size="x-small"></v-icon>
                </v-row>

            </v-col>
            <v-col sm="2" md="2" lg="2">
                <v-row class="mt-4">
                    <p class="text-subtitle-1 font-weight-medium">{{ Math.floor(forecast.feelsLike) }}°</p>
                </v-row>
                <v-row>
                    <p class="weather-text pa-0 text-caption">Feels like </p>
                    <v-icon class="pa-0 ml-1 mt-1" color="#727374" icon="mdi-weather-windy-variant" size="x-small"></v-icon>
                </v-row>

            </v-col>
            <v-col sm="2" md="2" lg="2">
                <v-row class="mt-4">
                    <p class="weather-precipitation text-subtitle-1">{{ Math.floor(forecast.precipitationPercentage) }}%</p>
                </v-row>
                <v-row>
                    <p class="weather-text pa-0 text-caption">Precipitation </p>
                    <v-icon class="pa-0 ml-1 mt-1" color="#727374" icon="mdi-weather-pouring" size="x-small"></v-icon>
                </v-row>

            </v-col>
        </v-row>
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
.weather-card {
    margin: 10px 0;
    color: #333;
    padding: 15px;
}

.weather-time {
    color: #727374;
}

.weather-text {
    color: #b1a9a9;
}

.weather-icon {
    width: 90px;
    height: 90px;
}

.weather-precipitation {
    color: #0bb1bb;
}
</style>