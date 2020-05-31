<template>
  <div class="container is-fluid">
    <Title title=" " />

    <div id="domo">
      <button v-on:click="show = !show">Toggle</button>
      <transition name="fade">
        <p v-if="show">HELLO</p>
      </transition>
    </div>

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
  },
  data() {
    return {
      show: true
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  text-align: center;

  .sns {
    padding-bottom: 50px;

    .twitter-event {
      display: none;
    }

    .github-event {
      display: none;
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