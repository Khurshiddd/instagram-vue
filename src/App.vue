<template>
  <div>
    
    <div class="container">
        <div class="d-flex justify-content-end align-items-center">
            <router-link to="login" class="m-2 btn">login</router-link>
            <router-link to="register" class="m-2 btn">register</router-link>
            <router-link to="home" class="m-2 btn">home</router-link>
        </div>
    </div>
        <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "App",
  components: {}
};
</script>
<style></style>
