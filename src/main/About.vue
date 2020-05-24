<template>
  <div>
    <Title title="About" />
    <div class="about">
      <h1>kona</h1>
      <br />
      <p>北海道に住んでいる大学4年です。</p>
      <p>工学部で情報を学んでいます。現在は主にWebの技術について学んでいます。</p>
      <img class="image" src="../assets/img/Saroma.jpg" alt="sceen" />
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title";

export default {
  components: {
    Title
  }
};
</script>

<style lang="scss" scoped>
div {
  background-color: #333;
  padding: 4%;

  h1 {
    font-size: 3em;
  }

  .image {
    padding-top: 50px;
  }
}
</style>