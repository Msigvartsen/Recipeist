<template>
  <main>
    <h1>{{ siteSettings.name }}</h1>
    <img :src="siteSettings.imageUrl" :alt="siteSettings.alt" />
    <section>
      Nyeste oppskrifter:
      <ul>
        <li v-for="r in recipeList" :key="r._id">
          <router-link :to="`/recipes/${r.slug.current}`">
            {{ r.title }}
          </router-link>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
import { client } from "../sanity"

var siteSettingsQuery = `*[_type == "siteSettings"][0]{
  name, 
  alt,
  "imageUrl": image.asset->url
}`
var recipesQuery =
  '*[_type == "recipe" && !(_id in path("drafts.**"))] | order(_createdAt desc) [0 .. 3]'

export default {
  data() {
    return { siteSettings: Object, recipeList: Object }
  },
  mounted() {
    client.fetch(siteSettingsQuery).then(x => (this.siteSettings = x))
    client.fetch(recipesQuery).then(x => (this.recipeList = x))
  }
}
</script>
