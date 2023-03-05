<template>
  <section class="about-page">
    <article>
      <h2>Who we are</h2>
      <p>Welcome to our recipe website, where we bring you delicious and easy-to-follow recipes from all around the
        world. We are passionate about cooking and believe that everyone can create amazing meals in their own kitchen
        with just a little guidance.</p>

      <p>Our team of experienced chefs and food enthusiasts work hard to create recipes that are not only delicious but
        also easy to make. We understand that time is precious, so our recipes are designed to be quick and simple,
        without sacrificing flavor or nutrition.</p>

      <p>Whether you're an experienced home cook or just starting out, our website has something for everyone. From
        classic comfort foods to exciting new dishes, we have a wide variety of recipes to suit every taste and
        occasion.</p>

      <p>We also believe that cooking should be fun and enjoyable, which is why we provide tips, tricks, and tutorials
        to help you improve your cooking skills and techniques. We want you to feel confident and inspired in the
        kitchen, so you can create delicious meals that you and your loved ones will enjoy.</p>
      <p>Thank you for visiting our website, and we hope you enjoy our recipes as much as we do. Happy cooking!</p>

      <router-link to="/contact" class="btn"> Contact</router-link>
    </article>

    <img src="@/assets/about.jpeg" alt="Pouring Salt" class="img about-img">

  </section>

  <section class="featured-recipes">
    <h5 class="featured-title"> Look at this awesomesouce!
    </h5>
    <featured-recipes/>
  </section>
</template>

<script setup>
import FeaturedRecipes from "../components/FeaturedRecipes.vue";
</script>

<style scoped lang="scss">

.about-page {
  display: grid;
  gap: 2em 4rem;
  padding-bottom: 3rem;

  h2 {
    text-transform: none;
    font-weight: bold;
  }

  .about-img {
    border-radius: var(--borderRadius);
    height: 300px;
  }
}

.featured-title {
  text-align: center;
  text-transform: capitalize;
}


@media screen and (min-width: 992px) {
  .about-page {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 800px;
    align-items: center;

    .about-img {
      height: 100%;
    }
  }

}

</style>