<template>
  <div class="container-fluid row" id="header">
    <Header-Brand class="col-7" />
    <Menu class="col-5" id="header-menu" />
  </div>
</template>

<script>
import Menu from "./Menu";
import HeaderBrand from "./HeaderBrand";

export default {
  name: "header-menu",
  components: {
    HeaderBrand,
    Menu,
  },
};
</script>