<script>
import { store } from '../store';

export default{
    name: "AppSerchBar",
    emits: ["filter"],
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div class="container">
        <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Cerca un film o una serie tv.." aria-label="Search">
            <button @click="$emit('filter')" class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    </div>
</template>

<style scoped lang="scss">
    .container {
        padding-right: 0;
    }

    form {
        display: flex;
    }

    input {
        margin-right: 10px;
    }

</style>