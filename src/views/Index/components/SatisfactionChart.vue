<script setup lang="ts">
import { onMounted } from "vue";
import * as echarts from 'echarts/core';
import { GaugeChart,BarChart } from 'echarts/charts';
import {
  GridComponent,
  LegendComponent,
  TooltipComponent,
} from "echarts/components";
import type {
  GridComponentOption,
  LegendComponentOption,
  TooltipComponentOption,
} from "echarts/components";
import type { GaugeSeriesOption,BarSeriesOption } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  GaugeChart,
  BarChart,
  GridComponent,
  LegendComponent,
  TooltipComponent,
  CanvasRenderer,
]);

type EChartsOption = echarts.ComposeOption<
  | GaugeSeriesOption
  | BarSeriesOption
  | GridComponentOption
  | LegendComponentOption
  | TooltipComponentOption
>;

var option: EChartsOption;

const gaugeData = [
  {
    value: 20,
    name: '厌学',
    // title: {
    //   offsetCenter: ['0%', '-30%']
    // },
    // detail: {
    //   valueAnimation: true,
    //   offsetCenter: ['0%', '-20%']
    // }
  },
  {
    value: 40,
    name: '自闭',
    // title: {
    //   offsetCenter: ['0%', '0%']
    // },
    // detail: {
    //   valueAnimation: true,
    //   offsetCenter: ['0%', '10%']
    // }
  },
  {
    value: 60,
    name: '暴躁',
    // title: {
    //   offsetCenter: ['0%', '30%']
    // },
    // detail: {
    //   valueAnimation: true,
    //   offsetCenter: ['0%', '40%']
    // }
  },
  {
    value: 80,
    name: '抑郁',
    // title: {
    //   offsetCenter: ['0%', '30%']
    // },
    // detail: {
    //   valueAnimation: true,
    //   offsetCenter: ['0%', '40%']
    // }
  }
];

option = {
  // legend: {
  //   show: true,
  //   orient: 'horizontal',
  //   icon: 'circle',
  //   data: ['厌学', '自闭', '暴躁', '抑郁'],
  //   formatter: (name: string) => {
  //     return name + "220"
  //   },
  //   // left: 0,
  //   // bottom: 0,
  //   itemHeight: 12,
  //   itemWidth: 12,
  //   width: "80%",
  //   itemGap: 100,
  //   bottom: '5%',
  //   selectedMode: false,
  // },
  // xAxis: [ 
  //   {
  //     type: 'category',
  //     data: [],
  //     axisLine: {
  //       show: false
  //     },
  //     splitLine: {
  //       show: false
  //     },
  //     splitArea: {
  //       interval: 'auto',
  //       show: false
  //     }
  //   }
  // ],
  // yAxis: [
  //   {
  //     type: 'value',
  //     axisLine: {
  //       show: false
  //     },
  //     splitLine: {
  //       show: false
  //     },
  //     axisLabel: {
  //       show: false
  //     }
  //   }
  // ],
  tooltip: {
    formatter: '【{b}】主题<br />咨询满意度: {c}%',
    backgroundColor: '#2c2c2c',
    borderColor: 'transparent',
    textStyle: {
      color: '#fff'
    }
  },
  series: [
    // {
    //   type: 'gauge',
    //   startAngle: 90,
    //   endAngle: -270,
    //   center: ['50%', '50%'],
    //   radius: '96%',
    //   pointer: {
    //     show: false
    //   },
    //   progress: {
    //     show: true,
    //     overlap: false,
    //     roundCap: true,
    //     clip: false,

    //     // itemStyle: {
    //     //   borderWidth: 1,
    //     //   borderColor: '#464646'
    //     // }
    //   },
    //   color:['#005F59','#4CD964','#52BA87','#E1F38E'],
    //   axisLine: {
    //     lineStyle: {
    //       width: 50
    //     }
    //   },
    //   splitLine: {
    //     show: false,
    //     distance: 0,
    //     length: 10
    //   },
    //   axisTick: {
    //     show: false
    //   },
    //   axisLabel: {
    //     show: false,
    //     distance: 50
    //   },
    //   data: gaugeData,
    //   title: {
    //     show:false,
    //     fontSize: 14
    //   },
    //   detail: {
    //     show:false,
    //     width: 50,
    //     height: 14,
    //     fontSize: 14,
    //     color: 'inherit',
    //     borderColor: 'inherit',
    //     borderRadius: 20,
    //     borderWidth: 1,
    //     formatter: '{value}%'
    //   }
    // },
    {
      type: 'gauge',
      startAngle: 90,
      endAngle: -270,
      center: ['50%', '50%'],
      radius: '100%',
      pointer: {
        show: false
      },
      progress: {
        show: true,
        overlap: false,
        roundCap: true,
        clip: false,
        // itemStyle: {
        //   borderWidth: 1,
        //   borderColor: '#464646'
        // }
      },
      color:['#005F59'],
      axisLine: {
        lineStyle: {
          width: 13
        }
      },
      splitLine: {
        show: false,
        distance: 0,
        length: 10
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false,
        distance: 50
      },
      data: [
        {
          value: 84,
          name: '厌学',
        }
      ],
      title: {
        show:false,
        fontSize: 14
      },
      detail: {
        show:false,
        width: 50,
        height: 14,
        fontSize: 14,
        color: 'inherit',
        borderColor: 'inherit',
        borderRadius: 20,
        borderWidth: 1,
        formatter: '{value}%'
      }
    },
    {
      type: 'gauge',
      startAngle: 0,
      endAngle: -360,
      center: ['50%', '50%'],
      radius: '84%',
      pointer: {
        show: false
      },
      progress: {
        show: true,
        overlap: false,
        roundCap: true,
        clip: false,
        // itemStyle: {
        //   borderWidth: 1,
        //   borderColor: '#464646'
        // }
      },
      color:['#4CD964'],
      axisLine: {
        lineStyle: {
          width: 13
        }
      },
      splitLine: {
        show: false,
        distance: 0,
        length: 10
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false,
        distance: 50
      },
      data: [
        {
          value: 92,
          name: '自闭',
        }
      ],
      title: {
        show:false,
        fontSize: 14
      },
      detail: {
        show:false,
        width: 50,
        height: 14,
        fontSize: 14,
        color: 'inherit',
        borderColor: 'inherit',
        borderRadius: 20,
        borderWidth: 1,
        formatter: '{value}%'
      }
    },
    {
      type: 'gauge',
      startAngle: -90,
      endAngle: 270,
      center: ['50%', '50%'],
      radius: '68%',
      pointer: {
        show: false
      },
      progress: {
        show: true,
        overlap: false,
        roundCap: true,
        clip: false,
        // itemStyle: {
        //   borderWidth: 1,
        //   borderColor: '#464646'
        // }
      },
      color:['#52BA87'],
      axisLine: {
        lineStyle: {
          width: 13
        }
      },
      splitLine: {
        show: false,
        distance: 0,
        length: 10
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false,
        distance: 50
      },
      data: [
        {
          value: 84,
          name: '暴躁',
        }
      ],
      title: {
        show:false,
        fontSize: 14
      },
      detail: {
        show:false,
        width: 50,
        height: 14,
        fontSize: 14,
        color: 'inherit',
        borderColor: 'inherit',
        borderRadius: 20,
        borderWidth: 1,
        formatter: '{value}%'
      }
    },
    {
      type: 'gauge',
      startAngle: 180,
      endAngle: -180,
      center: ['50%', '50%'],
      radius: '52%',
      pointer: {
        show: false
      },
      progress: {
        show: true,
        overlap: false,
        roundCap: true,
        clip: false,
        // itemStyle: {
        //   borderWidth: 1,
        //   borderColor: '#464646'
        // }
      },
      color:['#E1F38E'],
      axisLine: {
        lineStyle: {
          width: 13
        }
      },
      splitLine: {
        show: false,
        distance: 0,
        length: 10
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false,
        distance: 50
      },
      data: [
        {
          value: 90,
          name: '抑郁',
        }
      ],
      title: {
        show:false,
        fontSize: 14
      },
      detail: {
        show:false,
        width: 50,
        height: 14,
        fontSize: 14,
        color: 'inherit',
        borderColor: 'inherit',
        borderRadius: 20,
        borderWidth: 1,
        formatter: '{value}%'
      }
    },
    // {
    //   name:'厌学',
    //   type: "bar",
    //   color: "#005F59"
    // },
    // {
    //   name:'自闭',
    //   type: "bar",
    //   color: "#4CD964"
    // },
    // {
    //   name:'暴躁',
    //   type: "bar",
    //   color: "#52B587"
    // },
    // {
    //   name:'抑郁',
    //   type: "bar",
    //   color: "#E1F38E"
    // },
  ]
};

// setInterval(function () {
//   gaugeData[0].value = +(Math.random() * 100).toFixed(2);
//   gaugeData[1].value = +(Math.random() * 100).toFixed(2);
//   gaugeData[2].value = +(Math.random() * 100).toFixed(2);
//   myChart.setOption<echarts.EChartsOption>({
//     series: [
//       {
//         data: gaugeData,
//         pointer: {
//           show: false
//         }
//       }
//     ]
//   });
// }, 2000);

onMounted(() => {
  window.addEventListener('resize', () => {
    myChart.resize()
  })
  var chartDom = document.getElementById('satisfaction')!;
  var myChart = echarts.init(chartDom);
  option && myChart.setOption(option);
})

</script>
<template>
    <div id="satisfaction"></div>
</template>