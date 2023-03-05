<template>
  <h1>Contact Page</h1>
  <section class="contact-container">
    <article class="contact-info">
      <h3>Want To Get In Touch?</h3>
      <p>
        Four dollar toast biodiesel plaid salvia actually pickled banjo bespoke mlkshk intelligentsia edison bulb synth.
      </p>
      <p>Cardigan prism bicycle rights put a bird on it deep v.</p>
      <p>
        Hashtag swag health goth air plant, raclette listicle fingerstache cold-pressed fanny pack bicycle rights
        cardigan poke.
      </p>
    </article>
    <article>
      <form action="#" class="form contact-form">
        <div class="form-row">
          <label class="form-label" for="name">Your Name</label>
          <input type="text" id="name" name="name" class="form-input">
        </div>
        <div class="form-row">
          <label class="form-label" for="email">Email Address</label>
          <input type="email" id="email" name="email" class="form-input">
        </div>
        <div class="form-row">
          <label class="form-label" for="message">Message</label>
          <textarea id="message" name="message" class="form-textarea"></textarea>
        </div>
        <button type="submit" class="btn btn-block">Submit</button>
      </form>
    </article>
  </section>
  <featured-recipes/>

</template>

<script>
import FeaturedRecipes from "../components/FeaturedRecipes.vue";

export default {
  name: "Contact",
  components: {FeaturedRecipes}
}
</script>

<style scoped lang="scss">

.contact-container {
  display: grid;
  gap: 2rem 3rem;
  padding-bottom: 3rem;
  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }

  .contact-form {
    width: 100%;
    margin: 0;
  }


}


</style>