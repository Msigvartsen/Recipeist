<template>
  <section>
    <ul>
      <li v-for="ingredient in ingredients" :key="ingredient._id">
        <router-link :to="`/ingredients/${ingredient.slug.current}`">{{ingredient.name}}</router-link>
      </li>
    </ul>
  </section>
</template>

<script>
import { client } from "../sanity";

var query = '*[_type == "ingredient" && !(_id in path("drafts.**"))]';

export default {
  data() {
    return { ingredients: [] };
  },
  mounted() {
    client.fetch(query).then(x => (this.ingredients = x));
  }
};
</script>