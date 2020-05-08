<template>
  <div id="app">
    <Header />
    <router-view />
    <footer>footer</footer>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  components: {
    Header
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: pink;
}
</style>
