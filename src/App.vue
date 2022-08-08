<template>
  <div id="app">
    <header-component></header-component>
    <router-view></router-view>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from "./partials/Header-component.vue";
import FooterComponent from './partials/Footer-component.vue';

export default {
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "Gilroy Medium";
  src: local("Gilroy Medium"),
  url(./fonts/Gilroy-Medium.ttf);
}
@font-face {
  font-family: "Gilroy Light";
  src: local("Gilroy Light"),
  url(./fonts/Gilroy-Light.ttf);
}
@font-face {
  font-family: "Zing Rust Demo Base";
  src: local("Zing Rust Demo Base"),
  url(./fonts/ZingRustDemoBase.ttf);
}

* {
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
}
img {
  background: none; 
}

</style>
