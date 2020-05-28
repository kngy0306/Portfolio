<template>
  <div class="container is-fluid">
    <Title title="About" />
    <div class="about container">
      <p class="title has-text-white">kona</p>
      <br />
      <p>北海道に住んでいる大学4年です。</p>
      <i class="fas fa-address-book"></i>
      <p>工学部で情報を学んでいます。現在は主にWebの技術について学んでいます。</p>
      <div class="columns is-mobile">
        <div class="column is-one-third-desktop is-half-tablet is-full-mobile">
          <img class="image" src="../assets/img/kitami2.jpg" alt="sceen" />
        </div>
        <div class="column is-one-third-desktop is-half-tablet">
          <img class="image" src="../assets/img/winter-min.jpg" alt="sceen" />
        </div>
        <div class="column is-one-third-desktop">
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
@import "@/assets/style/padding.scss";

div {
  padding-bottom: $padding-bottom_pc;

  @media (max-width: 600px) {
    padding-bottom: $padding-bottom_mobile;
  }
}
</style>
