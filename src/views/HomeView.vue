<template>
  <Hero/>
  <RecipesContainer :recipes="recipes">
    <Tags :tags="tags"/>
  </RecipesContainer>
</template>

<style lang="scss">

</style>
<script setup>
import Hero from "../components/Home/Hero.vue";
import RecipesContainer from "../components/RecipesContainer.vue";
import Tags from "../components/Home/Tags.vue";
import {recipes, tags} from "../config/recipes";


</script>