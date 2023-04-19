<script>
import AppCard from "./AppCard.vue";
export default {
    name: "AppMain",
    components: {
        AppCard
    }
}
</script>

<template>
    <main>
        <div class="container">
            <h2>Film</h2>
            <div class="row">
                <div class="col">
                    <AppCard />
                </div>
                <div class="col">
                    <AppCard />
                </div>
                <div class="col">
                    <AppCard />
                </div>
                <div class="col">
                    <AppCard />
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
main {
    padding: 80px 0;
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
                height: 400px;
            }
        }
    }
}
</style>