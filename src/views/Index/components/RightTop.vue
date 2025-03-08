<script setup lang="ts">
import SatisfactionChart from './SatisfactionChart.vue';
const datas = [
    {
        name: "厌学",
        value: 235,
        rate: "35%",
        color:'#005F59'
    },
    {
        name: "自闭",
        value: 220,
        rate: "25%",
        color: '#4CD964'
    },
    {
        name: "暴躁",
        value: 174,
        rate: "15%",
        color: '#52BA87'
    },
    {
        name: "抑郁",
        value: 221,
        rate: "25%",
        color: '#E1F38E'
    },
]
</script>
<template>
    <div class="w-full h-full flex flex-col">
        <h2 class="mb-4 w-full">重点问题分析</h2>
        <div class="flex w-full justify-center items-center relative">
            <SatisfactionChart class="w-[26vh] h-[26vh] "/>
            <div class="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
                <span class="text-2xl text-[#170645] font-bold">88%</span>
                <span class="text-[#17064563]">重点问题</span>
            </div>
        </div>
        <div class="w-full px-8 flex items-center ">
            <ul class="list-disc pl-4 flex flex-wrap justify-between  min-w-[250px] mx-auto gap-x-[10px]">
                <li v-for="item in datas" :style="{color:item.color}">
                    <div class="flex flex-col w-[100px]">
                        <span class="text-[#666666]">{{ item.name }}</span>
                        <span class="text-lg font-semibold">
                            <span class="text-black mr-2">{{ item.value }}</span>
                            <span class="text-[#666666]">({{ item.rate }})</span>
                        </span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>