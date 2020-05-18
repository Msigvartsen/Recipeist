<template>
  <header class="base-container nes-container with-title is-centered">
    <h1>
      <i class="nes-icon is-large star"></i>
      <router-link to="/">
        Recipeist
      </router-link>
      <i class="nes-icon is-large star"></i>
    </h1>
    <nav>
      <router-link class="nes-btn is-success" to="/oppskrifter">Oppskrifter</router-link>
      <router-link class="nes-btn is-warning" to="/ingredienser">Ingredienser</router-link>
      <router-link class="nes-btn is-error" to="/random">Tilfeldig oppskrift</router-link>
    </nav>
  </header>
</template>

<script>
import { client } from "../sanity"

let siteSettingsQuery = `*[_type == "siteSettings"][0]{alt, "logoUrl": logo.asset->url}`
export default {
  data() {
    return { siteSettings: Object }
  },
  mounted() {
    client.fetch(siteSettingsQuery).then(x => (this.siteSettings = x))
  }
}
</script>

<style lang="scss" scoped>
h1 {
  margin-bottom: 20px;
  font-size: 3em;

  @media (max-width: 600px) {
    font-size: 9vw;
  }
}

nav a {
  margin-right: 10px;
}

.nes-icon.is-large {
  @media (max-width: 600px) {
    display: none;
  }
}
</style>
