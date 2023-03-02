<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
  <router-view></router-view>
</template>

<script>
export default {
  name: "MainLayout"
}
</script>

<style scoped>

</style>