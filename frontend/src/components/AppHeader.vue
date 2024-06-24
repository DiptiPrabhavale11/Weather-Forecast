<template>
  <v-toolbar color="primary" dark="true" class="pa-2">
    <v-app-bar-nav-icon @click="resetSearch">
      <v-icon size="large">
        mdi-home
      </v-icon>
    </v-app-bar-nav-icon>
    <v-toolbar-title>Weather Forecast</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-row class="mt-2" v-if="cityList.length">
      <v-btn icon class="mt-5 ml-5">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-col sm="4" md="7">
        <v-autocomplete label="Search City" variant="underlined" :items="cityList"
          item-title="city_name" item-value="city_id" return-object v-model="selectedCity"
          @update:modelValue="selectCity"></v-autocomplete>
      </v-col>
    </v-row>
  </v-toolbar>
</template>
<script>
export default {
  data: () => ({
    selectedCity: '',
  }),
  computed: {
    cityList() {
      return this.$store.getters.getCities;
    }
  },
  methods: {
    selectCity(city) {
      if (city) {
        const tab = {
          text: city.city_name,
          value: `tab-4`,
          ...city
        }
        const config = {
          apiKey: process.env.VUE_APP_API_KEY,
          lat: tab.lat,
          lon: tab.lon
        }
        this.$store.dispatch("setForecast", config);
        this.$store.dispatch("addTab", tab);
        this.$store.dispatch("setSelectedTab", tab.value);
      } else {
        this.resetSearch();
      }
    },
    resetSearch() {
      this.selectedCity = "";
      const tabs = [{
        text: 'Rio de Janeiro',
        value: 'tab-1',
        lat: -22.90278,
        lon: -43.2075
      },
      {
        text: 'Beijing',
        value: 'tab-2',
        lat: 39.9075,
        lon: 116.39723
      },
      {
        text: 'Los Angeles',
        value: 'tab-3',
        lat: 34.0239,
        lon: -118.17202
      },]
      this.$store.dispatch('setTabs', tabs);
      this.$store.dispatch("setSelectedTab", tabs[0].value);
      const config = {
        apiKey: process.env.VUE_APP_API_KEY,
        lat: tabs[0].lat,
        lon: tabs[0].lon
      }
      this.$store.dispatch("setForecast", config);
    }

  }
}
</script>