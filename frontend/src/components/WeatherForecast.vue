<template>
    <v-sheet>
        <v-row>
            <v-col lg="11">
                <v-tabs v-if="tabs.length" v-model="selectedTab" :items="tabs" align-tabs="left" color="black"
                    height="60" slider-color="#f78166" @click="changeTab">
                    <template v-slot:tab="{ item }">
                        <v-tab :prepend-icon="item.icon" :text="item.text" :value="item.value"></v-tab>
                    </template>

                    <template v-slot:item="{ item }">
                        <v-tabs-window-item :value="item.value" v-if="forecasts.length">
                            <v-card class="mx-auto my-8" variant="flat">
                                <v-card-item class="cardTitle">
                                    <v-card-title class="text-h6">
                                        Next Hours
                                    </v-card-title>
                                </v-card-item>
                                    <v-row class="justify-center"  no-gutters>
                                        <v-col v-for="forecast in hourlyForecast" :key="forecast.time" sm="4"
                                            md="3" lg="1" xl="1" class="text-subtitle-2 ma-3">
                                            <WeatherHrsCard :forecast="forecast"></WeatherHrsCard>
                                        </v-col>
                                    </v-row>
                            </v-card>
                            <v-card class="mx-auto my-8" variant="flat">
                                <v-card-item class="cardTitle">
                                    <v-card-title class="text-h6">
                                        Next 5 Days
                                    </v-card-title>
                                </v-card-item>
                                <v-row v-for="forecast in dayWiseForecast" :key="forecast.time" cols="12"
                                    class="text-subtitle-2 cardRow">
                                    <v-col class="pa-0">
                                        <WeatherDaysCard :forecast="forecast"></WeatherDaysCard>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-tabs-window-item>
                    </template>
                </v-tabs>
            </v-col>
            <v-col lg="1">
                <v-tooltip v-model="showTooltip" location="top">
                    <template v-slot:activator="{ props }">
                        <v-btn icon v-bind="props" size="small" color="primary" @click="refreshData">
                            <v-icon>
                                mdi-refresh
                            </v-icon>
                        </v-btn>
                    </template>
                    <span>Refresh Data</span>
                </v-tooltip>
            </v-col>
        </v-row>

    </v-sheet>
</template>
<script>
import WeatherHrsCard from './WeatherHrsCard.vue';
import WeatherDaysCard from './WeatherDaysCard.vue';
export default {
    data: () => ({
        showTooltip: false,
        tab: 'tab-1',
    }),
    components: {
        WeatherHrsCard,
        WeatherDaysCard
    },
    computed: {
        tabs() {
            return this.$store.getters.getTabs;
        },
        selectedTab: {
            get() {
                return this.$store.getters.getSelectedTab;
            },
            set(newValue) {
                this.tab = newValue;
                this.$store.commit('setSelectedTab', newValue);
            }
        },
        forecasts() {
            return this.$store.getters.getForecasts;
        },
        hourlyForecast() {
            return this.$store.getters.getHourlyForecast;
        },
        dayWiseForecast() {
            return this.$store.getters.getDayWiseForecast;
        },
    },
    mounted() {
        this.fetchWeatherData(this.tabs[0]);
    },
    methods: {
        async fetchWeatherData(obj) {
            const { lat, lon } = obj;
            const config = {
                apiKey: process.env.VUE_APP_API_KEY,
                lat,
                lon
            }
            this.$store.dispatch("setForecast", config);
        },
        refreshData() {
            this.$store.dispatch("setLoading", true);
            this.$store.dispatch('setLastWeatherUpdate', new Date());
            const selectedCity = this.tabs.find(t => t.value === this.selectedTab);
            if (selectedCity) {
                this.fetchWeatherData(selectedCity);
            }
            setTimeout(() => { this.$store.dispatch("setLoading", false); }, 500)
        },
        changeTab() {
            const selectedCity = this.tabs.find(t => t.value === this.tab);
            if (selectedCity) {
                this.$store.dispatch("setSelectedTab", selectedCity.value);
                this.fetchWeatherData(selectedCity);
            }
        }
    },
}
</script>
<style scoped>
.hrCradRow {
    max-height: 250px;

}

.cardRow {
    border-bottom: solid 1px rgb(238, 236, 236);
    border-radius: 0%;
}

.cardTitle {
    background-color: rgb(var(--v-theme-secondary));
}
</style>