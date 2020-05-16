<template>
  <section>
    <BaseFilterList
      v-if="ingredients && ingredientGroups"
      heading="Ingredienser"
      path="ingredienser"
      :items="ingredients"
      :filters="ingredientGroups"
    />
  </section>
</template>

<script>
import { client } from "../sanity"
import BaseFilterList from "../components/BaseFilterList"

var queryIngredients = '*[_type == "ingredient" && !(_id in path("drafts.**"))]'
var queryIngredientGroups = '*[_type == "ingredientGroup" && !(_id in path("drafts.**"))]'

export default {
  data() {
    return {
      ingredients: [],
      ingredientGroups: []
    }
  },
  async mounted() {
    this.ingredients = await client.fetch(queryIngredients)
    this.ingredientGroups = await client.fetch(queryIngredientGroups)
  },
  components: {
    BaseFilterList
  }
}
</script>
<style scoped></style>
