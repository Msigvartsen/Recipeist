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

<style lang="scss">
main {
  font-family: "Press Start 2P", cursive;
  max-width: 80%;
  margin: 0 auto;

  @media (max-width: 600px) {
    max-width: 100%;
  }
}

.image-caption {
  display: block;
  width: 100%;
  font-size: 11px;
  font-style: italic;
  text-align: center;
}

.base-container {
  @media (min-width: 600px) {
    margin-top: 2vw;
  }
  @media (max-width: 600px) {
    max-width: 96vw;
    margin: 2vw auto;
  }
}
</style>
