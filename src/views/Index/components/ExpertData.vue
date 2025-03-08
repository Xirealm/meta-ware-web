<script setup lang="ts">
import { computed } from "vue";
import ExpertStatus from "@/assets/icons/ExpertStatus.vue";

const props = defineProps<{
  data: {
    name: string;
    avatar: string;
    base: string;
    allTimes: number;
    currentTimes: number;
    status: "connecting" | "talking" | "busy" | "free" | "afterCall" | "rest";
  };
}>();

const progressRate = computed(() => {
  return props.data.currentTimes / props.data.allTimes;
});

const getStatusText = (status: typeof props.data.status) => {
  const statusMap = {
    connecting: "接入",
    talking: "通话",
    busy: "示忙",
    free: "空闲",
    afterCall: "话后处理",
    rest: "休息",
  };
  return statusMap[status];
};
</script>
<template>
  <div class="flex justify-between">
    <div class="flex w-[50%] items-center gap-2">
      <img :src="data.avatar" alt="" height="36" width="36" />
      <div class="flex flex-col flex-1">
        <div class="flex items-center gap-1">
          <span>{{ data.name }}</span>
          <div class="ml-1">
            <el-tooltip
              :content="getStatusText(data.status)"
              placement="top"
              effect="dark"
            >
              <div>
                <ExpertStatus :type="data.status"/>
              </div>
            </el-tooltip>
          </div>
        </div>
        <!-- <span class="text-xs text-[#666666]">{{data.base}}</span> -->
      </div>
    </div>
    <div class="flex justify-between items-center w-[55%]">
      <div class="w-[125px] shrink-0 text-[#666666]">
        排队量：{{ data.currentTimes }}/{{ data.allTimes }}
      </div>
      <div class="flex gap-1">
        <div
          v-for="(item, index) in 10"
          class="h-4 w-[5px] rounded"
          :class="
            progressRate >= (index + 1) / 10 ? 'bg-[#52BA87]' : 'bg-[#D9D9D9]'
          "
        ></div>
      </div>
    </div>
  </div>
</template>
