<script setup>
import {RouterView} from 'vue-router'
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <NavBar/>
  <main class="page">
    <RouterView/>
  </main>
  <Footer/>

</template>

<style scoped>

.page {
  width: 90vw;
  max-width: var(--max-width);
  margin: 0 auto;
  padding-top: 2rem;
  min-height: calc(100vh - (6rem + 4rem));
}
</style>
