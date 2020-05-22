<template>
  <div>
    <Header />
    <p v-if="msg.length > 0">{{ msg }}</p>
    <p v-else>no text</p>
    <input type="text" v-model="msg" />
    <button @click="clear()">clear</button>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  components: {
    Header
  },
  data() {
    return {
      msg: "Hello World!"
    };
  },
  methods: {
    clear() {
      this.msg = "";
    }
  }
};
</script>

<style scoped>
/* GoogleFonts */
@import url("https://fonts.googleapis.com/css2?family=Balsamiq+Sans:ital@1&family=Noto+Serif+JP&display=swap");
/* Bluma */
@import url("https://cdn.jsdelivr.net/npm/bulma@0.8.2/css/bulma.min.css");
</style>
