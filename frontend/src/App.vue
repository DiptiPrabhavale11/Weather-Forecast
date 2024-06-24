<template>
  <v-app>
    <v-main>
      <AppHeader />
      <v-container>
        <v-row v-if="loading" class="justify-center align-center" style="height: 100vh;">
          <v-progress-circular :size="200" color="primary" indeterminate></v-progress-circular>
        </v-row>
        <router-view v-show="!loading" />
      </v-container>
      <AppFooter />
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',

  components: {
    AppHeader,
    AppFooter,
  },
  mounted() {
    this.$store.dispatch('fetchCities');
    this.resetTabs();
  },
  computed: {
    loading() {
      return this.$store.getters.getLoading;
    }
  },
  methods: {
    resetTabs() {
      this.$store.dispatch('setTabs', [{
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
      },])
    }
  }
}
</script>
