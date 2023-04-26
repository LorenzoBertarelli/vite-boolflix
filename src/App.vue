<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { store } from './store';
import axios from 'axios';

export default {
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store
    }
  },
  methods: {
    performSearch() {
      console.log("ciao");
      if(this.store.searchKey) {
        this.getMovies(),
        this.getSeries();
      }
    },
    getMovies() {
      this.store.loading = true;
      console.log('loading');
      
    axios.get(`${this.store.apiUrl}/search/movie`, {
      params: {
        api_key: this.store.apiKey,
        query: this.store.searchKey
      }
      }).then((resp) => {
        console.log(resp);
        this.store.movies = resp.data.results;
      }).catch(err => {
        console.log(err);
      }).finally( () => {
        this.store.loading = false
        console.log( 'stop loading');
      })
    },
    getSeries() {
      this.store.loading = true;
      console.log('loading');

    axios.get(`${this.store.apiUrl}/search/tv`, {
      params: {
        api_key: this.store.apiKey,
        query: this.store.searchKey
      }
      }).then((resp) => {
        console.log(resp);
        this.store.seriesTV = resp.data.results;
      }).catch(err => {
        console.log(err);
      }).finally( () => {
        this.store.loading = false
        console.log( 'stop loading');
      })
    }
}}
</script>

<template>
<AppHeader @search="performSearch"/>
<AppMain />
</template>

<style lang="scss">
@use "./style/general.scss" as *;
</style>
