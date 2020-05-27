<template>
  <div class="has-background-black-bis">
    <Header />
    <About />
    <Works />
    <Footer />
  </div>
</template>

<script>
import Header from "@/main/Header";
import About from "@/main/About";
import Works from "@/main/Works";
import Footer from "@/main/Footer";

export default {
  components: {
    Header,
    About,
    Works,
    Footer,
  },
};
</script>

<style lang="scss">
/* GoogleFonts */
@import url("https://fonts.googleapis.com/css2?family=Balsamiq+Sans:ital@1&family=Noto+Serif+JP&display=swap");
/* Bluma */
@import url("https://cdn.jsdelivr.net/npm/bulma@0.8.2/css/bulma.min.css");

body {
  overflow: hidden;
  box-sizing: border-box;
  color: #fff;
  font-family: "Noto Serif JP", serif;
}
</style>
