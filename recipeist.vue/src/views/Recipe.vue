<template>
  <div class="recipe">
    <h1>{{ recipe.title }}</h1>

    <figure v-if="recipe.image" class="image-container">
      <img :src="recipe.image.url" :alt="recipe.image.alt" class="recipe-image" />
      <caption class="image-caption">
        {{
          recipe.image.caption
        }}
      </caption>
    </figure>

    <section class="recipe-ingredients">
      <ul v-if="recipe.ingredients">
        <li v-for="(x, i) in recipe.ingredients" :key="i">
          <span class="recipe-ingredients-firstcol">{{ x.quantity }} {{ x.ingredient.unit }}</span>
          <router-link v-if="x.ingredient.slug" :to="`/ingredienser/${x.ingredient.slug.current}`">
            {{ x.ingredient.name }}
          </router-link>
        </li>
      </ul>
    </section>

    <block-content v-if="recipe.mainbody" :blocks="recipe.mainbody" className="recipe-main-body" />

    <router-link to="/oppskrifter" class="recipe-bottom-link">Tilbake til oppskrifter</router-link>
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

<style lang="scss" scope>
.recipe {
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;

  &-ingredients {
    padding: 10px 15px;
    text-align: left;

    &-firstcol {
      display: inline-block;
      width: 150px;
    }
  }

  &-main-body {
    margin: 25px auto;
    max-width: 75%;
  }

  &-bottom-link {
    display: block;
    margin: 20px auto;
    text-align: center;
  }

  h1 {
    margin-bottom: 1.5rem;
    text-align: center;
  }
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

.ingredients ul {
  list-style: none;
}

.ingredients li div {
  float: left;
  width: 100px;
}

ol {
  text-align: left;
}
</style>
