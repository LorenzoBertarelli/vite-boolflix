import { reactive } from "vue";

export const store = reactive({
    searchKey: "",
    movies: [],
    tvSeries: [],
    apiUrl: "https://api.themoviedb.org/3",
    apiKey: "053a77122cd0176bd34ec4c89fa6aeb3",
    imgPath: "//https:image.tmdb.org/t/p/w342",
    loading: false,
})