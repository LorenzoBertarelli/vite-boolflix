<script>
import { store } from '../store';

export default{
    name: "AppHeader",
    data() {
        return {
            store
        }
    },
    props: {
        title: String
    },
}
</script>

<template>
    <header>
        <h1>BOOLFLIX</h1> 
        <div class="container">
        <div class="form-inline my-2 my-lg-0">
            <input v-model="store.searchKey" class="form-control mr-sm-2" type="search" placeholder="Cerca un film o una serie tv.." aria-label="Search">
            <button @click="$emit('search')" class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </div>
    </div>       
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
    .container {
        padding-right: 0;
    }

    .form-inline {
        display: flex;
    }

    input {
        margin-right: 10px;
    }
</style>