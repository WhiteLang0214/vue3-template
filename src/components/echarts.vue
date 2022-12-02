
<template>
  <div class="container" id="container"></div>
</template>

<script>
import { onMounted, getCurrentInstance } from 'vue'

export default {
  name: 'Echart',
  setup() {
    const globalConfig = getCurrentInstance().appContext.config.globalProperties;

    console.log(globalConfig)

    const createEchart = () => {
      // 基于准备好的dom，初始化echarts实例
      const myChart = globalConfig.echarts.init(document.getElementById('container'));
      // 绘制图表
      myChart.setOption({
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });
    }

    onMounted(() => {
      createEchart();
    })

    return {

    }
  }
}
</script>

<style>
.container {
  width: 500px;
  height: 450px;
}
</style>