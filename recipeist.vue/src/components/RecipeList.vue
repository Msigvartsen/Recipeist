<template>
  <section>
    <nav>
      Filter
      <button
        v-for="cuisine in cuisines"
        :key="cuisine._id"
        @click="toggleFilter(cuisine._id)"
        :class="{ active: activeFilters.includes(cuisine._id) }"
      >
        {{ cuisine.name }}
      </button>

      Søk <input v-model="query" />
    </nav>

    <ul>
      <li v-for="r in filteredRecipes" :key="r._id">
        <router-link :to="`/recipes/${r.slug.current}`">
          {{ r.title }}
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
import { client } from "../sanity"

var queryRecipes = '*[_type == "recipe" && !(_id in path("drafts.**"))]'
var queryCuisines = '*[_type == "cuisine" && !(_id in path("drafts.**"))]'

export default {
  data() {
    return { recipes: [], cuisines: [], activeFilters: [], query: "" }
  },
  mounted() {
    client.fetch(queryRecipes).then(x => (this.recipes = x))
    client.fetch(queryCuisines).then(x => (this.cuisines = x))
  },
  computed: {
    filteredRecipes() {
      let recipes = this.recipes
      if (this.activeFilters.length > 0) {
        recipes = recipes.filter(
          x =>
            x.cuisines &&
            this.activeFilters.some(y => x.cuisines.some(z => z._ref === y))
        )
      }

      if (this.query) {
        recipes = recipes.filter(x =>
          x.title.toLowerCase().includes(this.query.toLowerCase())
        )
      }

      return recipes
    }
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
