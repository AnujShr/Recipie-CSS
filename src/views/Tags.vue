<template>
  <div>
    <h4>{{ tag }}</h4>
  </div>
  <RecipesContainer :recipes="recipes"/>
</template>

<script setup>
import RecipesContainer from "../components/RecipesContainer.vue";
import {recipes, tags} from "../config/recipes"
import {useRoute, useRouter} from "vue-router";
import changeMetaTags from "../config/meta";


const route = useRoute()
const router = useRouter()
const tag = route.params.tag;

changeMetaTags({title: tag})

if (!tags.some(({name}) => name === tag)) {
  router.push({name: 'not-found'})
}


</script>

<style scoped>

</style>