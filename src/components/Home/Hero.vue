<template>
  <header class="hero">
    <div class="hero-container">
      <div class="hero-text">
        <h1>Simply Recipes</h1>
        <h4>No fluff, just recipes</h4>
      </div>
    </div>
  </header>
</template>
<style scoped lang="scss">
.hero {
  height: 40vh;
  background: url('@/assets/main.jpeg') center/cover no-repeat;
  margin-bottom: 2rem;
  border-radius: var(--borderRadius);
  position: relative;

  .hero-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    border-radius: var(--borderRadius);
    display: flex;
    align-items: center;
    justify-content: center;

    .hero-text {
      text-align: center;
      color: var(--white);
    }

    @media screen and (min-width: 768px) {
      .hero-text h1 {
        font-size: 4rem;
      }
    }
  }
}

</style>