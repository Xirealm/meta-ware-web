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
</script>
<template>
    <div class="w-full h-full flex flex-col">
        <div class="flex justify-between mb-4">
            <h2>真人专家介入咨询次数</h2>
            <el-select
                v-model="value"
                placeholder="Select"
                style="width: 240px"
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
            <template v-for="(item,index) in 6">
                <ExpertData class="w-[46%] h-1/4"/>
                <span class="w-full border-b border-1 h-1" v-if="index % 2 === 1 && index !== 6 - 1 "></span>
            </template>
        </div>
        <div class="h-[36px] flex items-center justify-end">
          <el-pagination background layout="prev, pager, next" :total="30" :page-size="6"/>
        </div>
    </div>
</template>