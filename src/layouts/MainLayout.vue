<template>
<!--  <header>-->
<!--    <nav>-->
<!--      <RouterLink to="/">Home</RouterLink>-->
<!--      <RouterLink to="/about">About</RouterLink>-->
<!--    </nav>-->
<!--  </header>-->
  <NavBar/>
  <router-view></router-view>
</template>

<script>
import NavBar from "../components/NavBar.vue";

export default {
  name: "MainLayout",
  components: {NavBar}
}
</script>

<style scoped>

</style>