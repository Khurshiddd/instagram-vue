<template>
    <div>
        <ul class="d-flex list-unstyled row">
            <router-link to="index" class="col fs-3"><i type="button" class="fa-solid fa-house"></i></router-link>
            <router-link to="search" class="col fs-3"><i type="button" class="fa-solid fa-magnifying-glass"></i></router-link>
            <router-link to="create" class="col fs-3"><i type="button" class="fa-regular fa-square-plus"></i></router-link>
            <router-link to="like" class="col fs-3"><i type="button" class="fas fa-heart"></i></router-link>
            <router-link to="user" class="col fs-3"><i type="button" class="fa-regular fa-user"></i></router-link>
        </ul>
    </div>  
    <!-- <router-view></router-view> -->
</template>
<script>
export default {
    name: 'Footer',
    components: {}
}
</script>
<style>
</style>