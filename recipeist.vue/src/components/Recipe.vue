<template>
  <div>
    <h1>{{recipe.title}}</h1>
    <img :src="recipe.imageUrl" :alt="recipe.title" />
    <router-link to="/recipes">Tilbake til oppskrifter</router-link>
  </div>
</template>

<script>
import { client } from "../sanity";

var query = `*[_type == "recipe" && slug.current == $slug][0]{
  title,
  "imageUrl": image.asset->url
}`;

export default {
  data() {
    return { recipe: Object };
  },
  mounted() {
    const params = { slug: this.$route.params.id };
    client.fetch(query, params).then(x => (this.recipe = x));
  }
};
</script>


