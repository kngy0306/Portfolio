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
  width: 100%;
  height: 100px;
  text-align: center;

  h2 {
    font-size: 2em;
    color: #eee;

    @media (max-width: 930px) {
      font-size: 1em;
    }
  }
}
</style>