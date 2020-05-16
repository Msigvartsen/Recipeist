<template>
  <footer class="footer">
    <button
      type="button"
      class="nes-btn is-error active footer-scroll-btn"
      onclick="window.scrollTo({ top: 0, behavior: 'smooth' });"
    >
      <span>&lt;</span>
    </button>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
.footer-scroll-btn {
  transform: rotate(90deg);
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 0 15px 10px;
}
</style>
