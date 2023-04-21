<script>
import { store } from "../store";
export default {
  name: "AppCard",
  props: {
    cardObj: Object
  },
  data() {
    return {
      availableFlags: {
       it: "it.webp",
       en: "en.webp"
      }
    }
  },
  methods: {
    getImgPath(imgPath) {
      return new URL(imgPath, import.meta.url).href;
    }
    // stars() {
    //   const rating = Math.round(this.cardObj.vote_average / 2); // voti da 1-10 a 1-5
    //   const stars = [];
    //   for (let i = 1; i <= 5; i++) {
    //     if (i <= rating) {
    //       stars.push(true);
    //     } else {
    //       stars.push(false);
    //     }
    //   }
    //   return stars;
    // }
  },
  computed: {
    objTitle() {
      return this.cardObj.title ? this.cardObj.title : this.cardObj.name
    },
    objVote() {
      return Math.ceil(this.cardObj.vote_avarage / 2)
    }
  }

};
</script>

<template>
    <div class="card">
        <img :src="'https://image.tmdb.org/t/p/w500/' + cardObj.poster_path" alt="Copertina">
        <h4 v-if="!cardObj.poster_path">Siamo spiacenti, l'immagine non è disponibile</h4>
        <ul>
            <li><span>Titolo:</span> {{ objTitle }}</li>
            <li><span>Titolo Originale:</span> {{ cardObj.original_title ? cardObj.original_title : cardObj.original_name }}</li>
            <li v-if="!availableFlags[cardObj.original_language]">
                <span>Lingua: </span> {{ cardObj.original_language }}
            </li>
            <li v-else>
                <span>Lingua: </span><img :src="getImgPath(`../assets/images/${availableFlags[cardObj.original_language]}`)" alt="">
            </li>
            <li><span>Voto:</span> 
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
              {{ cardObj.vote_avarage }} 
              
              <!-- <div>
                {{ objVote }}
                <i v-for="num in objVote" :key="num" class="fa-solid fa-star"></i>
                <i v-for="num in (5 - objVote)" :key="num" class="fa-regular fa-star"></i>                
              </div> -->

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
            img {
                width: 25px;
            }

            span {
                font-weight: bold;
            }
        }
    }
}
</style>