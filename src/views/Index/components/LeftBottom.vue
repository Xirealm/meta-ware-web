<script setup lang="ts">
import SchoolConsultChart from "./SchoolConsultChart.vue";
import { ref, onMounted } from "vue";

const value = ref("高中");

const options = [
  {
    value: "高中",
    label: "高中",
  },
  {
    value: "初中",
    label: "初中",
  },
  {
    value: "小学",
    label: "小学",
  },
];

const schools = ref(["福州市", "厦门市", "泉州市", "漳州市", "莆田市"]);
</script>
<template>
  <div class="w-full h-full flex flex-col relative">
    <div class="w-full h-[10%] flex justify-between z-0">
      <h2>分地区咨询情况</h2>
      <!-- <el-select v-model="value" placeholder="Select" style="width: 120px">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select> -->
    </div>
    <div class="flex flex-1 relative">
      <SchoolConsultChart class="w-[100%]" />
      <div class="absolute left-0 top-4 h-[80%] w-[28%]">
        <ol
          class="list-decimal pl-4 h-full text-[#8A8A8F] flex flex-col justify-between text-sm"
        >
          <li v-for="item in schools" class="">
            <span class="text-[#8A8A8F]">{{ item }}</span>
          </li>
        </ol>
      </div>
    </div>
    <div
      class="h-[36px] flex items-center justify-end absolute right-0 bottom-0"
    >
      <el-pagination
        background
        layout="prev, pager, next"
        :total="15"
        :page-size="5"
        size="small"
      />
    </div>
  </div>
</template>
