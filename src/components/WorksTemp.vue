<template>
  <div>
    <article class="box media has-background-grey-dark main-content">
      <!-- <figure class="media-left">
        <p class="image is-128x128">
          <img src="../assets/img/blog.png" />
        </p>
      </figure>-->
      <div class="media-content">
        <div class="content">
          <p class="work-title has-text-white">{{ item.title }}</p>
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
.work-title {
  font-size: 2em;
}
</style>