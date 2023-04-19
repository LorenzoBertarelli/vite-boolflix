import { reactive } from "vue";

export const store = reactive({
    links: [],
    apriURL: "https://api.themoviedb.org/3/search/movie?api_key=053a77122cd0176bd34ec4c89fa6aeb3",
    loading: false,
})