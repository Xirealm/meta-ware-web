<script setup lang="ts">
import { computed } from "vue"

const props = defineProps<{
    data: {
        name: string,
        avatar:string,
        base: string
        allTimes: number
        currentTimes: number
    }
}>()

const progressRate = computed(() => {
    return (props.data.currentTimes / props.data.allTimes)
})
</script>
<template>
    <div class="flex justify-between">
        <div class="flex w-[50%] items-center gap-2">
            <img :src="data.avatar" alt="" height="36" width="36" />
            <div class="flex flex-col flex-1">
                <span>{{data.name}}</span>
                <span class="text-xs text-[#666666]">{{data.base}}</span>
            </div>
        </div>
        <div class="flex justify-between items-center  w-[60%]">
            <div class="w-[70%]">咨询进度：{{data.currentTimes}}/{{ data.allTimes }}</div>
            <div class="flex gap-1">
                <div 
                    v-for="(item,index) in 10" 
                    class="h-4 w-1 rounded" 
                    :class="progressRate >= ((index + 1) / 10)?'bg-green-500':'bg-[#D9D9D9]'">
                </div>
            </div>
        </div>
    </div>
</template>
