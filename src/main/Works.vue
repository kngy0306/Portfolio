<template>
  <div>
    <Title title="Works" />
    <WorksTemp v-for="work in works" :key="work.title" :item="work" />
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
          title: "ScrapingApp(Nogizaka46Blog)",
          content:
            "乃木坂46ブログの画像をスクレイピングし、画像のみをフォルダへ保存します。",
          lang: "Python",
          version: "3.7.2"
        },
        {
          title: "Portfolio",
          content: "このポートフォリオです。",
          lang: "Vue-cli",
          version: "4.3.1"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
div {
  text-align: center;
  padding: 4%;
}
</style>