<template>
  <section>
    <nav>
      Filter
      <button
        v-for="ingredientGroup in ingredientGroups"
        :key="ingredientGroup._id"
        @click="toggleFilter(ingredientGroup._id)"
        :class="{ active: activeFilters.includes(ingredientGroup._id) }"
      >
        {{ ingredientGroup.name }}
      </button>

      Søk <input v-model="query" />
    </nav>

    Ingredienser
    <ul>
      <li v-for="ingredient in filteredIngredients" :key="ingredient._id">
        <router-link :to="`/ingredients/${ingredient.slug.current}`">
          {{ ingredient.name }} {{ ingredient.groupId }}
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
import { client } from "../sanity"

var queryIngredients = '*[_type == "ingredient" && !(_id in path("drafts.**"))]'
var queryIngredientGroups =
  '*[_type == "ingredientGroup" && !(_id in path("drafts.**"))]'

export default {
  data() {
    return {
      ingredients: [],
      ingredientGroups: [],
      activeFilters: [],
      query: ""
    }
  },
  computed: {
    filteredIngredients() {
      let ingredients = this.ingredients
      if (this.activeFilters.length > 0) {
        ingredients = ingredients.filter(x =>
          this.activeFilters.some(y => x.groupId && x.groupId.startsWith(y))
        )
      }

      if (this.query) {
        ingredients = ingredients.filter(x =>
          x.name.toLowerCase().includes(this.query.toLowerCase())
        )
      }

      return ingredients
    }
  },
  mounted() {
    client.fetch(queryIngredients).then(x => (this.ingredients = x))
    client.fetch(queryIngredientGroups).then(x => (this.ingredientGroups = x))
  },
  methods: {
    toggleFilter(filterId) {
      if (this.activeFilters.includes(filterId)) {
        this.activeFilters = this.activeFilters.filter(x => x !== filterId)
      } else {
        this.activeFilters.push(filterId)
      }
    }
  }
}
</script>
<style scoped>
nav {
  background-color: blueviolet;
}
.active {
  background-color: burlywood;
}
</style>
