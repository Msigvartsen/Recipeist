<template>
  <div>
    <h1>{{recipe.title}}</h1>
    <img :src="urlFor(recipe.image)" />
    <router-link to="/recipes">Tilbake til oppskrifter</router-link>
  </div>
</template>

<script>
import { client } from "../sanity";
import { urlFor } from "../sanity";

var query = `*[_type == "recipe" && slug.current == $slug][0]`;

export default {
  data: function() {
    return { recipe: Object };
  },
  mounted() {
    const params = { slug: this.$route.params.id };
    client.fetch(query, params).then(x => (this.recipe = x));
  },
  methods: {
    urlFor(image) {
      return urlFor(image)
        .width(200)
        .url();
    }
  }
};
</script>


