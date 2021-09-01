<template>
  <Collapse :data="playList" />
</template>

<script setup>
import Collapse from './Collapse.vue'

// TODO: get data from api
const playList = [{ id: 1, title: 'Cel Shader' }, { id: 2, title: 'Flutter' }, { id: 3, title: 'Gaming' }]
</script>
