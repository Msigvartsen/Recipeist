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

export default {
  data: function() {
    return { recipe: Object };
  },
  mounted() {
    console.log(this.$route.params.id);
    var query = `*[_type == "recipe" && _id == "${this.$route.params.id}"][0]`;
    client.fetch(query).then(x => (this.recipe = x));
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


