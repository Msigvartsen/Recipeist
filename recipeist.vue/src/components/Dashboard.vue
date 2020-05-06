<template>
  <div>
    <h1>{{siteSettings.name}}</h1>
    <img :src="urlFor(siteSettings.image)" />
    <router-link :to="`/recipes`">Recipes</router-link>
  </div>
</template>

<script>
import { client } from "../sanity";
import { urlFor } from "../sanity";

export default {
  data: function() {
    return { siteSettings: Object };
  },
  mounted() {
    var query = `*[_type == "siteSettings"][0]`;
    client.fetch(query).then(x => (this.siteSettings = x));
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


