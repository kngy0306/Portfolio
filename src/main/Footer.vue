<template>
  <div>
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
  padding: 50px 50px 0 50px;
  text-align: center;

  .sns {
    padding-bottom: 50px;
  }
  .icon {
    margin: 0 30px 30px 0;
    width: 50px;
    height: 50px;
  }
}
</style>