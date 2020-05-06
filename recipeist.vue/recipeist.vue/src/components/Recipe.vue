<template>
  <div>
    {{recipe.title}}
    <img :src="urlFor(recipe.image)" />
  </div>
</template>

<script>
import { urlFor } from "../sanity";
export default {
  mounted() {
    console.log(urlFor(this.recipe.image));
  },
  props: {
    recipe: Object
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


