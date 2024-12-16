<script setup lang="ts">
import { onMounted } from 'vue';
import * as echarts from 'echarts/core';
import { GridComponent,TooltipComponent, } from 'echarts/components';
import type { GridComponentOption,TooltipComponentOption, } from 'echarts/components';
import { LineChart } from 'echarts/charts';
import type { LineSeriesOption } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([GridComponent, TooltipComponent , LineChart, CanvasRenderer, UniversalTransition]);

type EChartsOption = echarts.ComposeOption<
  | GridComponentOption
  | LineSeriesOption 
  | TooltipComponentOption
>;

var option: EChartsOption;

option = {
  grid: {
    left: '0',
    right: '0',
    top: '3%',
    bottom: '2%',
    containLabel: true
  },
  tooltip: {
    trigger: 'axis',
    formatter: '较前1小时：<br/>咨询量: {c}',
    backgroundColor: '#2c2c2c',
    borderColor: 'transparent',
    textStyle: {
      color: '#fff'
    }
  },
  xAxis: {
    type: 'category',
    data: [
      '0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00',
      '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'
    ],
    boundaryGap: false,
    axisLabel: {
      margin: 30,
      fontSize: 14
    },
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      margin: 30,
      fontSize: 14,
    },
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260,150, 230, 224, 218, 135, 147, 260,150, 230, 224, 218, 135, 147, 260,150, 230, 224,156],
      type: 'line',
      color: '#52BA87',
      symbolSize: 13,
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
              offset: 0, color: '#52BA8733' 
          }, {
              offset: 1, color: '#E1F38E00'
          }],
        },
      }
    }
  ]
};

onMounted(() => {
    window.addEventListener('resize', () => {
        myChart.resize()
    })
    var chartDom = document.getElementById('consultationVolume')!;
    var myChart = echarts.init(chartDom);
    option && myChart.setOption(option);
})

</script>
<template>
    <div id="consultationVolume" style="width: 1800px;"/>
</template>