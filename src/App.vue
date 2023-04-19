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
    store.loading = true;
    axios.get("https://api.themoviedb.org/3/search/movie?api_key=053a77122cd0176bd34ec4c89fa6aeb3")
          .then((resp) => {
            this.store.links = resp.data.results;
          })
  },
}
</script>

<template>
<AppHeader />
<AppMain />
</template>

<style lang="scss">
@use "./style/general.scss" as *;
</style>
