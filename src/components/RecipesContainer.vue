<template>
  <section class="recipe-container">

    <Tags :tags="tags"/>

    <div class="recipes-list">
      <a href="#" class="recipe"
         v-for="recipe in recipes">
        <img :src="recipe.image" :alt="recipe.tag"
             class="img recipe-img">
        <h5>{{ recipe.title }}</h5>
        <p>Prep : {{ recipe.prep }} | Cook : {{ recipe.cook }}</p>
      </a>
    </div>

  </section>
</template>

<script setup>
import Tags from "./Home/Tags.vue";

const tags = [
  {
    name: 'Breakfasts',
    count: 2,
  },
  {
    name: 'Carrots',
    count: 2,
  },
  {
    name: 'Dinner',
    count: 3,
  },
  {
    name: 'Lunch',
    count: 3,
  },
  {
    name: 'Pancakes',
    count: 3,
  },

]
const recipes = [
  {
    image: '/assets/recipes/recipe-1.jpeg',
    tag: 'Food',
    title: 'Carne asada',
    prep: '15 min',
    cook: '5 min'
  },
  {
    image: '/assets/recipes/recipe-2.jpeg',
    tag: 'Food',
    title: 'Greek Ribs',
    prep: '15 min',
    cook: '5 min'
  },
  {
    image: '/assets/recipes/recipe-3.jpeg',
    tag: 'Food',
    title: 'Vegetable soups',
    prep: '15 min',
    cook: '5 min'
  },
  {
    image: '/assets/recipes/recipe-4.jpeg',
    tag: 'Food',
    title: 'Banana Pancake',
    prep: '15 min',
    cook: '5 min'
  },
]

</script>
<style scoped lang="scss">
.recipe-container {
  display: grid;
  gap: 2rem 1rem;
  border: 2px solid red;

  .recipes-list {
    display: grid;
    gap: 2rem 1rem;
    padding-bottom: 3rem;
    border: 2px solid green;

    .recipe {
      display: block;

      .recipe-img {
        height: 15rem;
        border-radius: var(--borderRadius);
        margin-bottom: 1rem;
      }

      h5 {
        margin-bottom: 0;
        line-height: 1;
        color: var(--grey-700);
      }

      p {
        margin-bottom: 0;
        line-height: 1;
        margin-top: 0.5rem;
        color: var(--grey-500);
        letter-spacing: var(--letterSpacing);
      }
    }
  }
}
</style>