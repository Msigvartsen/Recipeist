<template>
  <header class="header">
    <div>
      <router-link to="/">
        <img :src="siteSettings.logoUrl" :alt="siteSettings.alt"  class="header header-img"/>
      </router-link>
    </div>
    <nav>
      <router-link to="/recipes">Oppskrifter</router-link>
      <router-link to="/ingredients">Ingredienser</router-link>
    </nav>
  </header>
</template>

<script>
import { client } from "../sanity";

let siteSettingsQuery = `*[_type == "siteSettings"][0]{alt, "logoUrl": logo.asset->url}`;
export default {
  data() {
    return { siteSettings: Object };
  },
  mounted() {
    client.fetch(siteSettingsQuery).then(x => (this.siteSettings = x));
  }
};
</script>

<style>
.header {
  background-color: lightblue;
}
.header .header-img {
  height: 50px;
  width: 50px;
}
</style>

