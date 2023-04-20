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
  mounted() {

  },
  methods: {
    performSearch() {
      console.log("ciao");
      if(this.store.searchKey) {
        this.getMovies();
      }
    },
    getMovies() {
      this.store.loading = false;
      
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
