<template>
  <div id="app">
    <div>
      <Header id="header" />
    </div>
    <div>
      <router-view />
    </div>
    <div class="container-fluid" id="footer">
      <Footer class="footer-menu"></Footer>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,

    Footer,
  },
};
</script>

<style lang="scss">
@import "./assets/scss/style.scss";
</style>
