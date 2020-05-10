<template>
  <div>
    <h1>{{ recipe.title }}</h1>

    <figure v-if="recipe.image">
      <img :src="recipe.image.url" :alt="recipe.image.alt" />
      <caption>
        {{
          recipe.image.caption
        }}
      </caption>
    </figure>

    <p>Ingredienser:</p>

    <ul v-if="recipe.ingredients">
      <li v-for="(x, i) in recipe.ingredients" :key="i">
        {{ x.quantity }} {{ x.ingredient.unit }}
        <router-link
          v-if="x.ingredient.slug"
          :to="`/ingredients/${x.ingredient.slug.current}`"
          >{{ x.ingredient.name }}</router-link
        >
      </li>
    </ul>
    <block-content :blocks="recipe.mainbody" />
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
