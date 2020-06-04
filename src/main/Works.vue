<template>
  <div class="container is-fluid">
    <Title title="Works" />
    <div class="work-space">
      <WorksTemp v-for="work in works" :key="work.title" :item="work" />
    </div>
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
      works: [
        {
          link: "https://qiita.com/xxPowderxx/items/e9726b8b8a114655d796",
          title: "ScrapingApp(◢)",
          content:
            "乃木坂46ブログの画像をスクレイピングし、画像のみをフォルダへ保存します。BeautifulSoupを使用しています。",
          lang: "Python",
          version: "3.7.2"
        },
        {
          title: "Portfolio",
          content:
            "このポートフォリオです。Vue.js、SASS、Bluma等を使用しています。",
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

  .work-space {
    display: flex;
    flex-flow: wrap;
    justify-content: space-around;
    align-content: space-around;
  }
}
</style>
