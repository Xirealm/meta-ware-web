<script setup lang="ts">
import { computed } from "vue"

const currentTimes = 2
const allTimes = 12
const progressRate = computed(() => {
    return (currentTimes / allTimes)
})
</script>
<template>
    <div class="flex justify-between">
        <div class="flex w-[50%] items-center gap-2">
            <img src="/src/assets/experts/expert1.png" alt="" height="36" width="36" />
            <div class="flex flex-col flex-1">
                <span>李珊珊</span>
                <span class="text-xs text-[#666666]">阳光心理咨询中心</span>
            </div>
        </div>
        <div class="flex justify-between items-center gap-4">
            <div class="flex-1">咨询进度：2/12</div>
            <div class="flex gap-1">
                <div 
                    v-for="(item,index) in 10" 
                    class="h-4 w-1 rounded" 
                    :class="progressRate > ((index + 1) / 10)?'bg-green-500':'bg-[#D9D9D9]'">

                </div>
            </div>
        </div>
    </div>
</template>
