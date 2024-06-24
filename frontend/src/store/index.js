import { createStore } from 'vuex';
import Service from '../services/commonService';
import ForecastConversions from '@/utils/ForecastConversions';
export default createStore({
    state: {
        loading: false,
        cities: [],
        tabs: [],
        selectedTab: '',
        forecasts: [],
        hourlyForecast: [],
        dayWiseForecast: [],
        lastWeatherUpdate: '',
    },
    getters: {
        getCities(state) {
            return state.cities;
        },
        getTabs(state) {
            return state.tabs;
        },
        getSelectedTab(state) {
            return state.selectedTab;
        },
        getLoading(state) {
            return state.loading;
        },
        getForecasts(state) {
            return state.forecasts;
        },
        getHourlyForecast(state) {
            return state.hourlyForecast;
        },
        getDayWiseForecast(state) {
            return state.dayWiseForecast;
        },
        getLastWeatherUpdate(state) {
            return state.lastWeatherUpdate;
        },
    },
    mutations: {
        setCities(state, data) {
            state.cities = data;
        },
        setTabs(state, data) {
            state.tabs = data;
        },
        setSelectedTab(state, data) {
            state.selectedTab = data;
        },
        setForecast(state, forecasts) {
            state.forecasts = forecasts;
            state.hourlyForecast = ForecastConversions.hourlyfilteredForescast(forecasts, 27);
            state.dayWiseForecast = ForecastConversions.daywiseFilteredForecast(forecasts);
        },
        setLoading(state, flag) {
            state.loading = flag;
        },
        setLastWeatherUpdate(state, data) {
            state.lastWeatherUpdate = data;
        },
    },
    actions: {
        fetchCities({ commit }) {
            commit('setLoading', true);
            Service.getData('https://weather-forecast-g9kz.onrender.com/cities')
                .then(cities => {
                    commit('setCities', cities);
                    commit('setLoading', false);
                })
        },
        setLoading({ commit }, flag) {
            commit('setLoading', flag);
        },
        setTabs({ commit }, tabs) {
            commit('setTabs', tabs);
        },
        setSelectedTab({ commit }, data) {
            commit('setSelectedTab', data);
        },
        setLastWeatherUpdate({ commit }, date) {
            commit('setLastWeatherUpdate', date);
        },
        addTab({ commit, state }, tab) {
            let tabs = []
            if (state.tabs.length === 3) {
                tabs = [...state.tabs, tab];
            } else {
                tabs = [...state.tabs.slice(0, 3), tab];
            }
            commit('setTabs', tabs);
            commit('setSelectedTab', 'tab-4');
        },
        async setForecast({ commit }, obj) {
            const { lat, lon } = obj;
            const config = {
                apiKey: process.env.VUE_APP_API_KEY,
                lat,
                lon
            }
            try {
                const forecasts = await Service.getWeatherData(config, 20);
                commit('setForecast', forecasts);
            } catch (error) {
                console.error('Error occurred:', error);
                commit('setForecast', []);
            }
        },
    },
    modules: {
    },
});
