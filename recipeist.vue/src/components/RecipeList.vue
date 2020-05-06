<template>
  <section>
    <router-link v-for="r in recipes" :key="r._id" :to="`/recipes/${r.slug.current}`">{{r.title}}</router-link>
  </section>
</template>

<script>
import { client } from "../sanity";

var query = '*[_type == "recipe" && !(_id in path("drafts.**"))]';

export default {
  data: function() {
    return { recipes: [] };
  },
  mounted() {
    client.fetch(query).then(x => (this.recipes = x));
  }
};
</script>