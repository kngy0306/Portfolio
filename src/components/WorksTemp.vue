<template>
  <div>
    <article class="box media has-background-grey-dark main-content">
      <div class="media-content">
        <div class="content">
          <a :href="item.link">
            <p class="work-title">{{ item.title }}</p>
          </a>
          <br />
          <p class="has-text-white">{{ item.content }}</p>
          <br />
          <span class="lang tag is-primary">{{ item.lang }}</span>
          <span class="version tag is-dark">ver- {{ item.version }}</span>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  a {
    .work-title {
      font-size: 2em;
      color: #5bbee5;

      @media (max-width: 600px) {
        font-size: 1.1em;
      }
      &:hover {
        color: #00dd22;
      }
    }
  }
}
</style>