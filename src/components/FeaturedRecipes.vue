<template>
  <section class="featured-recipes">
    <h5 class="featured-title"> Look at this awesomesouce!
    </h5>
    <recipes-container :recipes="featuredRecipes"/>

  </section>

</template>

<script setup>
import RecipesContainer from "./RecipesContainer.vue";
import {recipes} from "../config/recipes";

let featuredRecipes = [...recipes]
featuredRecipes.shift();

</script>

<style scoped>

</style>