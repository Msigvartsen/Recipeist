<template>
  <main>
    <h1>{{siteSettings.name}}</h1>
    <img :src="urlFor(siteSettings.image)" :alt="siteSettings.alt" />
    <section>
      Newest Recipes:
      <div v-for="r in recipeList" :key="r._id">{{r.title}}</div>
    </section>
     <router-link :to="`/recipes`">Recipes</router-link> <!--Move to header component -->
  </main>
</template>

<script>
import { client } from "../sanity";
import { urlFor } from "../sanity";
var query = `*[_type == "siteSettings"][0]`;
var recipes = `*[_type == "recipe" && !(_id in path("drafts.**"))] | order(_createdAt desc) [0 .. 3]`;
export default {
  data: function() {
    return { siteSettings: Object, recipeList: Object };
  },
  mounted() {
    client.fetch(query).then(x => (this.siteSettings = x));
    client.fetch(recipes).then(x => (this.recipeList = x));
  },
  methods: {
    urlFor(image) {
      return urlFor(image)
        .width(400)
        .url();
    }
  }
};
</script>


