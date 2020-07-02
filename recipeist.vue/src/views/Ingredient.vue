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
    Legg i handleliste:
    <button @click="add(ingredient.name)">+</button>
    <span>{{ itemCount }}</span>
    <button @click="decrement(ingredient.name)">-</button>
    <button @click="remove(ingredient.name)">Slett</button>
    <router-link to="/ingredienser" class="ingredient-bottom-link">Tilbake til ingredienser</router-link>
  </div>
</template>

<script>
import { client } from "../sanity"
import * as listFunctions from "../ShoppingList"
const queryIng = '*[_type == "ingredient" && slug.current == $slug][0]'
const queryRec = `*[_type == "recipe" && references($id)]`

export default {
  data() {
    return { ingredient: {}, recipes: [], itemCount: Number }
  },
  async mounted() {
    this.ingredient = await client.fetch(queryIng, {
      slug: this.$route.params.slug
    })
    this.recipes = (await client.fetch(queryRec, { id: this.ingredient._id })).filter(x => !x._id.startsWith("draft"))
    this.itemCount = this.getQuantity(this.ingredient.name)
  },
  methods: {
    add: function (product) {
      listFunctions.addToList(product)
      this.itemCount = this.getQuantity(product)
    },
    decrement: function (product) {
      listFunctions.decrementProductQuantity(product)
      this.itemCount = this.getQuantity(product)
    },
    remove: function () {
      listFunctions.clearShoppingList()
      this.itemCount = 0
    },
    getQuantity: function (product) {
      let itemCount = listFunctions.getListItemQuantity(product)
      return itemCount != null ? itemCount : 0
    }
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
