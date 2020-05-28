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
    border-bottom: solid 2px #7e1083;
    line-height: initial;
  }
}
</style>