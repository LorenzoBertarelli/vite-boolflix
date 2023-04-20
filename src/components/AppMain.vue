<script>
import { store } from "../store";
import AppCard from "./AppCard.vue";
export default {
    name: "AppMain",
    components: {
        AppCard
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <main>
        <div class="container">
            <h2>Film</h2>
            <div class="row">
                <div class="col" v-for="movie in store.movies">
                    <AppCard :movie="movie"/>
                </div>
            </div>
        </div>
        
    </main>
</template>

<style scoped lang="scss">
main {
    .container {
        max-width: 1200px;
        width: 90%;
        margin: 0 auto;
        h2 {
            padding: 40px 0;
            font-size: 2rem;
            font-weight: bold;
        }
        .row {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            .col {
                width: calc(100% / 4 - 15px);
                border: 1px solid black;
                height: none;
            }
        }
    }
}
</style>