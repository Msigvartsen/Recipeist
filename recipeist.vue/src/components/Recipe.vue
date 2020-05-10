<template>
  <div class="recipe">
    <h1>{{ recipe.title }}</h1>

    <figure v-if="recipe.image" class="image-container">
      <img
        :src="recipe.image.url"
        :alt="recipe.image.alt"
        class="recipe-image"
      />
      <caption class="image-caption">
        {{
          recipe.image.caption
        }}
      </caption>
    </figure>

    <section class="ingredients">
      <ul v-if="recipe.ingredients" class="recipe-list">
        <li v-for="(x, i) in recipe.ingredients" :key="i">
          {{ x.quantity }} {{ x.ingredient.unit }}
          <router-link
            v-if="x.ingredient.slug"
            :to="`/ingredients/${x.ingredient.slug.current}`"
          >
            {{ x.ingredient.name }}
          </router-link>
        </li>
      </ul>
    </section>

    <block-content v-if="recipe.mainbody" :blocks="recipe.mainbody" />

    <router-link to="/recipes">Tilbake til oppskrifter</router-link>
  </div>
</template>

<script>
import { client } from "../sanity"

var query = `*[_type == "recipe" && slug.current == $slug][0]{
  title,
  mainbody,
  ingredients[]{ingredient->{name, unit, slug}, quantity},
  "image": {"url": image.asset->url, "alt": image.alt, "caption": image.caption}
}`

export default {
  data() {
    return { recipe: {} }
  },
  mounted() {
    const params = { slug: this.$route.params.id }
    client.fetch(query, params).then(x => (this.recipe = x))
  }
}
</script>

<style>
.recipe {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.image-caption {
  font-size: 11px;
  font-style: italic;
}

.image-container {
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
}
.recipe-image {
  position: relative;
  width: 90%;
  height: auto;
  align-items: center;
}

.recipe-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style: none;
}
.recipe-list li {
  color: red;
}

ol {
  text-align: left;
}
</style>
