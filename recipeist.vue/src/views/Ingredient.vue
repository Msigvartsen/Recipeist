<template>
  <div class="ingredient">
    <h1>{{ ingredient.name }}</h1>

    <img class="ingredient-main-image" :src="ingredient.imageUrl" :alt="ingredient.imageAltText" />

    <div class="base-container nes-container with-title">
      <p class="title">Brukes i følgende oppskrifter</p>
      <div class="lists">
        <ul class="nes-list is-circle">
          <li v-for="(r, i) in recipes" :key="i">
            <router-link v-if="r.slug" :to="`/oppskrifter/${r.slug.current}`">{{ r.title }}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <button @click="add('test', '2')">Legg i handleliste</button>
    <router-link to="/ingredienser" class="ingredient-bottom-link">Tilbake til ingredienser</router-link>
  </div>
</template>

<script>
import { client } from "../sanity"
import { addToList } from "../ShoppingList"
const queryIng = '*[_type == "ingredient" && slug.current == $slug][0]'
const queryRec = `*[_type == "recipe" && references($id)]`

export default {
  data() {
    return { ingredient: {}, recipes: [] }
  },
  async mounted() {
    this.ingredient = await client.fetch(queryIng, {
      slug: this.$route.params.slug
    })
    this.recipes = (await client.fetch(queryRec, { id: this.ingredient._id })).filter(x => !x._id.startsWith("draft"))
  },
  methods: {
    add: (product, quantity) => addToList(product, quantity)
  }
}
</script>
<style lang="scss" scoped>
.ingredient {
  margin-top: 20px;
  &-main-image {
    @media (min-width: 600px) {
      width: 75%;
      display: block;
      margin: 20px auto 40px;
    }
    @media (max-width: 600px) {
      width: 100%;
    }
  }

  &-bottom-link {
    display: block;
    margin: 20px auto;
    text-align: center;
  }

  h1 {
    text-align: center;
  }
}
</style>
