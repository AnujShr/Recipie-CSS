<template>
  <footer class="page-footer">
    <p>&copy; <span id="date">{{ new Date().getFullYear() }}</span>
      <span class="footer-logo">
        SimplyRecipes
      </span>
    </p>
  </footer>

</template>

<style scoped lang="scss">
.page-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  background: var(--black);
  color: var(--white);

  p {
    margin-bottom: 0;
  }

  .footer-logo {
    color: var(--primary-500);
  }


}
</style>