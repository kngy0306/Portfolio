<template>
  <div class="title">
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style lang="scss" scoped>
// レスポンシブ対応でv-if使いたい
.title {
  h2 {
    font-size: 2em;
    color: #eee;
  }
}
</style>