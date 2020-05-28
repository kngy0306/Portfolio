<template>
  <div class="container is-fluid">
    <Title title=" " />
    <div class="sns">
      <font-awesome-icon :icon="['fab', 'twitter-square']" class="icon" />
      <font-awesome-icon :icon="['fab', 'github-square']" class="icon" />
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
  text-align: center;

  .sns {
    padding-bottom: 50px;
  }
  .icon {
    margin: 0 30px;
    width: 50px;
    height: 50px;
  }
}
</style>