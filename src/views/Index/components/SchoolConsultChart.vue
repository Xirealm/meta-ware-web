<script setup lang="ts">
import { onMounted, nextTick, ref } from "vue";
import * as echarts from "echarts/core";
import {
  DatasetComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from "echarts/components";
import type {
  DatasetComponentOption,
  TooltipComponentOption,
  GridComponentOption,
  LegendComponentOption,
} from "echarts/components";
import { BarChart } from "echarts/charts";
import type { BarSeriesOption } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([
  DatasetComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  BarChart,
  CanvasRenderer,
]);

type EChartsOption = echarts.ComposeOption<
  | DatasetComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | LegendComponentOption
  | BarSeriesOption
>;

var option: EChartsOption;

option = {
  legend: {
    // show:false
    itemWidth: 8,
    itemHeight: 8,
    left: 0,
    bottom: 0,
    icon: "circle",
  },
  tooltip: {
    formatter: (params: any) => {
      return (
        schools.value[params.name - 1] +
        "<br/>" +
        params.seriesName +
        "咨询量：" +
        params.value[params.encode.y[0]]
      );
    },
    backgroundColor: "#2c2c2c",
    borderColor: "transparent",
    textStyle: {
      color: "#fff",
    },
  },
  dataset: {
    source: [
      ["学校", "今日", "昨日"],
      [1, 43, 85],
      [2, 93, 73],
      [3, 86, 65],
      [4, 72, 53],
      [5, 122, 63],
    ],
  },
  xAxis: { type: "category" },
  yAxis: {
    name: "咨询量（次/天）",
    nameTextStyle: {
      padding: [0, 0, 0, 0], // 调整单位的位置
    },
  },
  // Declare several bar series, each will be mapped
  // to a column of dataset.source by default.
  series: [
    {
      type: "bar",
      color: "#52BA87",
    },
    {
      type: "bar",
      color: "#005F59",
    },
  ],
  itemStyle: {
    borderRadius: [5, 5, 0, 0],
  },
  grid: {
    left: "30%",
    right: "0",
    top: "17%",
    bottom: "12%",
    containLabel: true,
  },
};

onMounted(async () => {
  window.addEventListener("resize", () => {
    myChart.resize();
  });
  nextTick();
  const chartDom = document.getElementById("schoolConsult")!;
  const myChart = echarts.init(chartDom);
  option && myChart.setOption(option);
});

const schools = ref(["福州市", "厦门市", "泉州市", "漳州市", "莆田市"]);
</script>
<template>
  <div id="schoolConsult"></div>
</template>
