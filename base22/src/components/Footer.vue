<template>
  <div class="container-fluid" id="footer-content">
    <header-brand id="footer-branding" />
    <Menu id="footer-menu" />
    <p class="address">Main St #1234</p>
    <p class="address">Amazing City, 45678</p>
    <p id="credit">Some images were taken from unsplash.com</p>
  </div>
</template>

<script>
import Menu from "./Menu";
import HeaderBrand from "./HeaderBrand";

export default {
  name: "footer-menu",
  components: {
    HeaderBrand,
    Menu,
  },
};
</script>