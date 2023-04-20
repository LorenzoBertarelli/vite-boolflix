<script>
export default {
  name: "AppCard",
  props: {
    movie: Object
  },
  methods: {
    stars() {
      const rating = Math.round(this.movie.vote_average / 2); // voti da 1-10 a 1-5
      const stars = [];
      for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
          stars.push(true);
        } else {
          stars.push(false);
        }
      }
      return stars;
    }
  },
  data() {
        return {
            stars
        }
    },
};
</script>

<template>
    <div class="card">
        <img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" alt="Copertina">
        <h4 v-if="!movie.poster_path">Siamo spiacenti, l'immagine non è disponibile</h4>
        <ul>
            <li><span>Titolo:</span> {{ movie.title }}</li>
            <li><span>Titolo Originale:</span> {{ movie.original_title }}</li>
            <li><span>Lingua:</span> {{ movie.original_language }}</li>
            <li><span>Voto:</span> {{ movie.vote_avarage }}     
               <div>
                <span v-for="star in stars" :class="{ active: star }">&star;</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
.card {
    border: none;

    width: 100%;
    ul {
        list-style-type: none;
        width: 100%;
        margin: 0 auto;
        padding: 10px;
        li {
            span {
                font-weight: bold;
            }
        }
    }
}
</style>