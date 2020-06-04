<template>
  <div class="container is-fluid">
    <Title title=" " />
    <div class="sns">
      <a href="https://twitter.com/YoKaU2">
        <font-awesome-icon :icon="['fab', 'twitter-square']" class="icon cotainer" />
      </a>
      <a href="https://github.com/kngy0306/portfolio">
        <font-awesome-icon :icon="['fab', 'github-square']" class="icon contaienr" />
      </a>
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
.container {
  text-align: center;

  .sns {
    padding-bottom: 50px;

    a {
      color: #fff;

      &:visited {
        color: #fff;
      }
    }
  }

  .icon {
    margin: 0 30px;
    width: 50px;
    height: 50px;

    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
}
</style>
