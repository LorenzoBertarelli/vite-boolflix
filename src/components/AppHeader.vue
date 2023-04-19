<script>
import AppSerchBar from './AppSerchBar.vue';

export default{
    name: "AppHeader",
    props: {
        title: String
    },
    components: { AppSerchBar }
}
</script>

<template>
    <header>
        <h1>BOOLFLIX</h1> 
        <AppSerchBar />        
    </header>
</template>

<style scoped lang="scss">
    header {
        color: rgb(255, 0, 0);
        align-items: center;
        display: flex;
        background-color: rgb(0, 0, 0);
        height: 80px;
        width: 100%;
        padding: 20px;
    }
</style>