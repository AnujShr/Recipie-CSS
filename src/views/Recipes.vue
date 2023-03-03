<template>
  <RecipesContainer :recipes="recipes">
    <Tags :tags="tags"/>
  </RecipesContainer>
</template>

<script setup>
import RecipesContainer from "../components/RecipesContainer.vue";
import {recipes, tags} from "../config/recipes";
import Tags from "../components/Home/Tags.vue";

</script>

<style scoped>

</style>