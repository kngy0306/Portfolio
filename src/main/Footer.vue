<template>
  <div class="container is-fluid">
    <Title title=" " />
    <div class="sns">
      <font-awesome-icon
        :icon="['fab', 'twitter-square']"
        class="icon cotainer"
      />
      <font-awesome-icon
        :icon="['fab', 'github-square']"
        class="icon contaienr"
      />
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title";

export default {
  components: {
    Title,
  },
};
</script>

<style lang="scss" scoped>
.container {
  text-align: center;

  .sns {
    padding-bottom: 50px;
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
