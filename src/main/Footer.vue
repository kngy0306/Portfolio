<template>
  <div>
    <Title title=" " />
    <h1>Footerのページです</h1>
    <font-awesome-icon :icon="['fab', 'twitter-square']" />
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

<style scoped>
div {
  padding: 4% 4% 0 4%;
}
</style>