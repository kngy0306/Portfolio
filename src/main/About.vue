<template>
  <div>
    <Title title="About" />
    <div class="about">
      <h1>kona</h1>
      <br />
      <p>北海道に住んでいる大学4年です。</p>
      <p>工学部で情報を学んでいます。現在は主にWebの技術について学んでいます。</p>
      <div class="columns is-desktop">
        <div class="column">
          <img class="image" src="../assets/img/kitami2.jpg" alt="sceen" />
        </div>
        <div class="column">
          <img class="image" src="../assets/img/winter-min.jpg" alt="sceen" />
        </div>
        <div class="column">
          <img class="image saroma" src="../assets/img/Saroma-min.jpg" alt="sceen" />
        </div>
      </div>
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

  .saroma {
    @media (max-width: 600px) {
      display: none;
    }
  }
}
</style>