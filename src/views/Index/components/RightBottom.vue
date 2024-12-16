<script setup lang="ts">
import { ref } from 'vue'
import ExpertData from './ExpertData.vue';

const value = ref('过去24小时')

const options = [
  {
    value: '过去24小时',
    label: '过去24小时',
  },
  {
    value: '过去一周',
    label: '过去一周',
  },
  {
    value: '过去一月',
    label: '过去一月',
  },
]

const expertsList = ref([
  {
    name: '李珊珊',
    base: '阳光心理咨询中心',
    avatar: "/src/assets/experts/expert1.png",
    allTimes: 10,
    currentTimes: 9,
  },
  {
    name: '王强',
    base: '安心心理咨询所',
    avatar: "/src/assets/experts/expert2.png",
    allTimes: 15,
    currentTimes: 6,
  },
  {
    name: '刘丽丽',
    base: '阳光心理咨询中心',
    avatar: "/src/assets/experts/expert1.png",
    allTimes: 12,
    currentTimes: 7,
  },
  {
    name: '李志强',
    base: '安心心理咨询所',
    avatar: "/src/assets/experts/expert2.png",
    allTimes: 8,
    currentTimes: 8,
  },
  {
    name: '王丽萍',
    base: '阳光心理咨询中心',
    avatar: "/src/assets/experts/expert1.png",
    allTimes: 10,
    currentTimes: 3,
  },
  {
    name: '张毅',
    base: '安心心理咨询所',
    avatar: "/src/assets/experts/expert2.png",
    allTimes: 24,
    currentTimes: 17,
  },
])

</script>
<template>
    <div class="w-full h-full flex flex-col">
        <div class="flex justify-between mb-4">
            <h2>真人专家介入咨询次数</h2>
            <el-select
                v-model="value"
                placeholder="Select"
                style="width: 160px"
                >
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
            </el-select>
        </div>
        <div class="flex justify-between flex-wrap flex-1 ">
            <template v-for="(item,index) in expertsList">
                <ExpertData :data = item class="w-[46%] h-1/4"/>
                <span class="w-full border-b border-1 h-1 border-gray-500" v-if="index % 2 === 1 && index !== 6 - 1 "></span>
            </template>
        </div>
        <div class="h-[36px] flex items-center justify-end">
          <el-pagination background layout="prev, pager, next" :total="120" :page-size="6"/>
        </div>
    </div>
</template>