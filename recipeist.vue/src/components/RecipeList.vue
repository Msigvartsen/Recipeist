<template>
  <section>
    <ul>
      <li v-for="r in recipes" :key="r._id">
        <router-link :to="`/recipes/${r.slug.current}`">{{r.title}}</router-link>
      </li>
    </ul>
  </section>
</template>

<script>
import { client } from "../sanity";

var query = '*[_type == "recipe" && !(_id in path("drafts.**"))]';

export default {
  data() {
    return { recipes: [] };
  },
  mounted() {
    client.fetch(query).then(x => (this.recipes = x));
  }
};
</script>