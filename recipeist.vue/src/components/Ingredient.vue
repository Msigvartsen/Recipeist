<template>
  <div>
    <h1>{{ ingredient.name }}</h1>
    <img :src="ingredient.imageUrl" :alt="ingredient.imageAltText" />
    <router-link to="/ingredients">Tilbake til ingredienser</router-link>
  </div>
</template>

<script>
import { client } from "../sanity"

var query = '*[_type == "ingredient" && slug.current == $slug][0]'

export default {
  data() {
    return { ingredient: {} }
  },
  mounted() {
    const params = { slug: this.$route.params.slug }
    client.fetch(query, params).then(x => (this.ingredient = x))
  }
}
</script>
