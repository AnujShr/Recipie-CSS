<template>
  <NavBar/>
  <main class="page">
    <router-view></router-view>
  </main>
  <Footer/>

</template>

<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "MainLayout",
  components: {Footer, NavBar}
}
</script>

<style scoped>

.page {
  width: 90vw;
  max-width: var(--max-width);
  margin: 0 auto;
  padding-top: 2rem;
  min-height: calc(100vh - (6rem + 4rem));
}
</style>