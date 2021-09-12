<template>
  <div class="card">
    <div class="content">
      <div class="thumbnail-container">
        <img class="thumbnail" src="@assets/content_cover.jpg" />
      </div>
      <div class="detail">
        <div class="author-cover-container">
          <img class="author-cover" src="@assets/author_cover.jpg" />
        </div>
        <div class="meta">
          <span class="title">{{ content.title }}</span>
          <div class="author">
            <span class="author">{{ content.author }}</span>
            <span>{{ watchCount }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { formatWatchCount } from '@utils'
const props = defineProps({
  content: {
    type: Object,
    required: true
  }
})

const watchCount = `${formatWatchCount(props.content.watchCount)} 次观看`
</script>

<style scoped>
  .card {
    margin: 0 8px 40px;
    width: calc(100% / var(--v-content-items-per-row) - var(--v-content-items-margin) - 0.01px);
  }
  .content {
    max-width: 320px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .thumbnail-container {
    width: 100%;
    height: 152px;
  }
  .thumbnail {
    width: 100%;
    height: 152px;
    object-fit: cover;
  }
  .detail {
    margin-top: 8px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
  .author-cover-container {
    width: 48px;
    height: 48px;
    min-width: 48px;
    min-height: 48px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 8px;
  }
  .author-cover {
    width: 48px;
    height: 48px;
  }
  .meta {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .title {
    color: var(--v-text-primary);
    font-weight: bold;
    text-overflow: ellipsis;
    white-space: normal;
    -webkit-line-clamp: 2;
    height: 40px;
    overflow: hidden;
  }
  .author {
    color: var(--v-text-secondary);
    margin-top: 8px;
    display: flex;
    flex-direction: column;
  }
</style>
