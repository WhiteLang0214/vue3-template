
<template>
  <h1>{{moduleName}}</h1>
  <echart></echart>
</template>

<script setup name="Home">

import echart from '../components/echarts.vue'
import { onMounted } from 'vue-demi'

const moduleName = "首页"

</script>

<style>

</style>