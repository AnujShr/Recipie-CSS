<template>
  <div class="tags-container">
    <h4>Recipes</h4>
    <div class="tags-list">
      <router-link :to="{name:'TagDetails', params:{'tag' : tag.name}}" v-for="tag in props.tags"
                   :key="tag.name"
      >
        {{ tag.name }} ({{ tag.count }})
      </router-link>
    </div>
  </div>

</template>
<script setup>
const props = defineProps({
  tags: {
    type: Array,
    required: true
  }
})
</script>
<style scoped lang="scss">
.tags-container {
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;
  order: 1;

  h4 {
    margin-bottom: 0.5rem;
    font-weight: 500;
  }

  .tags-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    a {
      text-transform: capitalize;
      display: block;
      color: var(--grey-500);

      &:hover {
        color: var(--primary-500);
      }
    }
  }
}

@media screen and (min-width: 992px) {
  .tags-container {
    order: 0;

    .tags-list {
      grid-template-columns: 1fr;
    }
  }
}

</style>