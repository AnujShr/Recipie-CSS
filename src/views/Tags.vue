<template>
  <div>
    <section class="tags-wrapper">

      <router-link
          class="tag"
          :to="{name:'TagDetails',params: {tag:tag.name}}"
          v-for="tag in tags" :key="tag.name">
        <h5>
          {{ tag.name }}
        </h5>
        <p>{{ tag.count }} recipes </p>
      </router-link>
    </section>
  </div>
</template>


<script setup>
import {tags} from "../config/recipes";
</script>

<style scoped lang="scss">
.tags-wrapper {
  display: grid;
  gap: 2rem;
  padding-bottom: 3rem;


  .tag {
    background: var(--grey-500);
    border-radius: var(--borderRadius);
    text-align: center;
    color: white;
    transition: var(--transition);
    padding: 0.75rem 0;

    &:hover {
      background: var(--primary-500);

    }

    h5 {
      font-weight: 600;
    }

    h5,
    p {
      margin-bottom: 0;
    }


  }


}

@media screen and (min-width: 576px) {
  .tags-wrapper {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (min-width: 992px) {
  .tags-wrapper {
    grid-template-columns: repeat(3, 1fr);
  }
}


</style>