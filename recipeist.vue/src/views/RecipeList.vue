<template>
  <section>
    <BaseFilterList
      v-if="recipes && cuisines"
      heading="Oppskrifter"
      path="oppskrifter"
      :items="recipes"
      :filters="cuisines"
    />
  </section>
</template>

<script>
import { client } from "../sanity"
import BaseFilterList from "../components/BaseFilterList"

var queryRecipes = '*[_type == "recipe" && !(_id in path("drafts.**"))]'
var queryCuisines = '*[_type == "cuisine" && !(_id in path("drafts.**"))]'

export default {
  data() {
    return { recipes: [], cuisines: [] }
  },
  async mounted() {
    this.recipes = await client.fetch(queryRecipes)
    this.cuisines = await client.fetch(queryCuisines)
  },
  components: {
    BaseFilterList
  }
}
</script>
<style scoped></style>
