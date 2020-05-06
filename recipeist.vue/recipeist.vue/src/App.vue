<template>
  <div id="app">
    <Recipe v-for="r in recipes" :key="r._id" :recipe="r" />
  </div>
</template>

<script>
import Recipe from "./components/Recipe.vue";
import { client } from "./sanity";

var query = '*[_type == "recipe" && !(_id in path("drafts.**"))]';

export default {
  mounted() {
    client.fetch(query).then(ex => (this.recipes = ex));
  },
  name: "App",
  components: {
    Recipe
  },
  data: function() {
    return { recipes: "" };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: pink;
}
</style>
