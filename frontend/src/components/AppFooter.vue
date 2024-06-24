<template>
    <footer>
        <p class="footerText">Last Updated on {{ lastUpdatedAt }} </p>
    </footer>
</template>
<script>
import DateConversions from '../utils/DateConversions';
export default {
    data: () => ({
        updatedAt: new Date(),
    }),
    mounted() {
        this.$store.dispatch('setLastWeatherUpdate', new Date());
    },
    computed: {
        lastUpdatedAt() {
            return `${DateConversions.convertDate(this.$store.getters.getLastWeatherUpdate)}
            ${new Date(this.$store.getters.getLastWeatherUpdate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
        },
    },
}
</script>
<style>
footer {
    position: fixed;
    width: 100%;
    height: 25px;
    background-color: rgb(var(--v-theme-primary));
    color: #fff;
    bottom: 0;
    text-align: end;
    padding-right: 20px;
}

.footerText {
    font-size: small;
    margin-top: 5px;
}
</style>