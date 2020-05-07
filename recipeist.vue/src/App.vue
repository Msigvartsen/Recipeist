<template>
  <div id="app">
    <nav>
      header
      <router-link to="/">home link</router-link>
    </nav>
    <router-view />
    <footer>footer</footer>
  </div>
</template>

<script>
export default {};
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
