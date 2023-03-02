<template>
  <div class="navbar">
    <div class="nav-center">
      <div class="nav-header">
        <router-link to="/" class="nav-logo">
          <img src="@/assets/logo.svg" alt="Simply Recipes">
        </router-link>
        <button class="btn nav-btn" type="button">
          <font-awesome-icon icon="fa-solid fa-align-justify"></font-awesome-icon>
        </button>
      </div>
      <div class="nav-links">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/tags" class="nav-link">Tags</router-link>
        <router-link to="/recipe" class="nav-link">Recipe</router-link>
        <div class="nav-link contact-link">
          <router-link to="/contact" class="btn">Contact</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped lang="scss">
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;

  .nav-center {
    width: 90vw;
    max-width: var(--max-width);

    .nav-header {
      height: 6rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .nav-logo {
        display: flex;
        align-items: center;

        img {
          width: 200px;
        }
      }

    }
  }

  .nav-btn {
    padding: 0.15rem 0.75rem;

    svg {
      font-size: 1.25rem;
    }
  }

  .nav-links {
    display: flex;
    flex-direction: column;

    .nav-link {
      display: block;
      text-align: center;
      text-transform: capitalize;
      color: var(--grey-900);
      letter-spacing: var(--letterSpacing);
      padding: 1rem 0;
      border-top: 1px solid var(--grey-500);
      transition: var(--transition);

      &:hover {
        color: var(--primary-500);
      }
    }

    .contact-link {
      a {
        padding: 0.15rem 1rem;
      }
    }
  }
}

</style>