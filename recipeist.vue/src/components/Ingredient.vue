<template>
  <div>
    <h1>{{ ingredient.name }}</h1>
    <img :src="ingredient.imageUrl" :alt="ingredient.imageAltText" />

    Brukes i følgende oppskrifter:
    <ul>
      <li v-for="(r, i) in recipes" :key="i">
        <router-link v-if="r.slug" :to="`/recipes/${r.slug.current}`">{{
          r.title
        }}</router-link>
      </li>
    </ul>
    <router-link to="/ingredients">Tilbake til ingredienser</router-link>
  </div>
</template>

<script>
import { client } from "../sanity"

const queryIng = '*[_type == "ingredient" && slug.current == $slug][0]'
const queryRec = `*[_type == "recipe" && references($id)]`

export default {
  data() {
    return { ingredient: {}, recipes: [] }
  },
  async mounted() {
    this.ingredient = await client.fetch(queryIng, {
      slug: this.$route.params.slug
    })
    this.recipes = (
      await client.fetch(queryRec, { id: this.ingredient._id })
    ).filter(x => !x._id.startsWith("draft"))
  }
}
</script>
<style scoped>
img {
  width: 100%;
}
</style>
