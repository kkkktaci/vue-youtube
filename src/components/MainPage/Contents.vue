<template>
  <div class="content-container">
    <ContentCard
      v-for="card in data"
      :content="card"
    ></ContentCard>
  </div>  
</template>

<script setup>
import ContentCard from './ContentCard.vue'

const data = [
  {
    title: 'lofi hip hop radio - beats to relax/study to lofi hip hop radio - beats to relax/study to',
    author: 'Lofi Girl',
    watchCount: '12000',
  },
  {
    title: 'lofi hip hop radio - beats to relax/study to',
    author: 'Lofi Girl',
    watchCount: '12000',
  },
  {
    title: 'lofi hip hop radio - beats to relax/study to',
    author: 'Lofi Girl',
    watchCount: '12000',
  },
  {
    title: 'lofi hip hop radio - beats to relax/study to',
    author: 'Lofi Girl',
    watchCount: '12000',
  },
  {
    title: 'lofi hip hop radio - beats to relax/study to',
    author: 'Lofi Girl',
    watchCount: '12000',
  },
  {
    title: 'lofi hip hop radio - beats to relax/study to',
    author: 'Lofi Girl',
    watchCount: '12000',
  },
]
</script>

<style scoped>
  .content-container {
    margin-top: 24px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>
