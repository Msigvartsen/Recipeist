<template>
  <div class="dashboard">
    <img class="dashboard-main-image" :src="siteSettings.imageUrl" :alt="siteSettings.alt" />

    <div class="dashboard-recipes nes-container with-title">
      <p class="title">Nyeste oppskrifter</p>
      <div class="lists">
        <ul class="nes-list is-circle">
          <li v-for="(r, i) in recipes" :key="i">
            <router-link v-if="r.slug" :to="`/oppskrifter/${r.slug.current}`">{{ r.title }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { client } from "../sanity"

var siteSettingsQuery = `*[_type == "siteSettings"][0]{
  name,
  alt,
  "imageUrl": image.asset->url
}`
var recipesQuery = '*[_type == "recipe" && !(_id in path("drafts.**"))] | order(_createdAt desc) [0 .. 3]'

export default {
  data() {
    return { siteSettings: Object, recipes: Array }
  },
  async mounted() {
    this.siteSettings = await client.fetch(siteSettingsQuery)
    this.recipes = await client.fetch(recipesQuery)
  }
}
</script>
<style lang="scss" scoped>
.dashboard {
  &-main-image {
    width: 75%;
    display: block;
    margin: 20px auto 40px;
  }

  &-recipes {
    margin-bottom: 40px;
  }

  h1 {
    text-align: center;
  }
}
</style>
