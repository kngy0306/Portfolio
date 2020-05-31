<template>
  <div class="container is-fluid">
    <Title title="Works" />
    <div>
      <WorksTemp v-for="work in works" :key="work.title" :item="work" />
    </div>

    <button v-on:click="isActive = !isActive">
      <div v-if="isActive" class="alert">
        <h1 class="h1-text">This is ALERT</h1>
      </div>
      <h1 v-if="!isActive">OPEN ALERT</h1>
      <h1 v-if="isActive">HELLO</h1>
    </button>
  </div>
</template>

<script>
import Title from "@/components/Title";
import WorksTemp from "@/components/WorksTemp";

export default {
  components: {
    Title,
    WorksTemp
  },
  data() {
    return {
      isActive: false,
      works: [
        {
          title: "ScrapingApp(Nogizaka46Blog)",
          content:
            "乃木坂46ブログの画像をスクレイピングし、画像のみをフォルダへ保存します。",
          lang: "Python",
          version: "3.7.2"
        },
        {
          title: "Portfolio",
          content: "このポートフォリオです。",
          lang: "Vue.js",
          version: "4.3.1"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/padding.scss";

div {
  text-align: center;
  padding-bottom: $padding-bottom_pc;

  @media (max-width: 600px) {
    padding-bottom: $padding-bottom_mobile;
  }

  .alert {
    color: #fff;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);

    .h1-text {
      margin: 0 auto;
    }
  }
}
</style>