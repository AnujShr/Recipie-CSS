<template>
  <section class="recipe-container">
    <slot></slot>
    <div class="recipes-list">
      <a href="#" class="recipe"
         v-for="recipe in props.recipes">
        <img :src="recipe.image" :alt="recipe.tag"
             class="img recipe-img">
        <h5>{{ recipe.title }}</h5>
        <p>Prep : {{ recipe.prep }} | Cook : {{ recipe.cook }}</p>
      </a>
    </div>

  </section>
</template>

<script setup>

const props = defineProps({
  recipes: {
    type: Array,
    required: true
  }
})

</script>
<style scoped lang="scss">
.recipe-container {
  display: grid;
  gap: 2rem 1rem;

  .recipes-list {
    display: grid;
    gap: 2rem 1rem;
    padding-bottom: 3rem;

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

@media screen and (min-width: 576px) {
  .recipe-container {
    .recipes-list {
      grid-template-columns: 1fr 1fr;
    }

    .recipe {
      .recipe-img {
        height: 10rem;
      }
    }
  }
}

@media screen and (min-width: 992px) {
  .recipe-container {
    grid-template-columns: 200px 1fr;

    .recipe {
      .recipe-img {
        height: 20rem;
      }

      p {
        font-size: 0.85rem;
      }
    }
  }
}

@media screen and (min-width: 1200px) {
  .recipe-container {
    &:has(.recipes-list:first-child) {
      grid-template-columns: 1fr;
    }

    .recipes-list {
      grid-template-columns: 1fr 1fr 1fr;
    }

    .recipe {
      h5 {
        font-size: 1.15rem;
      }
    }
  }
}

</style>