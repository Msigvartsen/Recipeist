<template> </template>

<script>
// Denne komponenten er et godt eksempel på en komponent som blir bedre i Vue3
import { client } from "../sanity"

var queryRecipes = '*[_type == "recipe" && !(_id in path("drafts.**"))]'

export default {
  data() {
    return { recipes: [] }
  },
  async mounted() {
    this.recipes = await client.fetch(queryRecipes)
    var slug = this.getRandomRecipeSlug()
    this.$router.push(`/oppskrifter/${slug}`)
  },
  methods: {
    getRandomRecipeSlug() {
      if (!this.recipes) return

      const recipe = this.recipes[Math.floor(Math.random() * this.recipes.length)]
      if (recipe) return recipe.slug.current
    }
  }
}
</script>
<style scoped></style>
