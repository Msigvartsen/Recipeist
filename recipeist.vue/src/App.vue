<template>
  <main>
    <Header />
    <router-view />
    <Footer />
  </main>
</template>

<script>
import Header from "./components/BaseHeader"
import Footer from "./components/BaseFooter"

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>
main {
  font-family: "Press Start 2P", cursive;
  max-width: 80%;
  margin: 0 auto;

  @media (max-width: 600px) {
    max-width: 100%;
  }
}

.image-caption {
  font-size: 11px;
  font-style: italic;
}
</style>
