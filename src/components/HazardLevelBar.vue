<script setup lang="ts">
const props = defineProps<{
    hazardLevel: {
        level: number,
        text:string
    }
}>()
</script>
<template>
    <div class="flex justify-center gap-2 items-center">
        <div class="flex gap-1">
            <div
                v-for="(item,index) in 10" 
                class="h-4 w-[5px] rounded"
                :class="{
                    'bg-[#52BA87]': hazardLevel.level <= 5 && hazardLevel.level >= (index + 1),
                    'bg-[#FF2D55]': hazardLevel.level > 5 && hazardLevel.level >= (index + 1),
                    'bg-[#D9D9D9]': hazardLevel.level < (index + 1),
                }">
            </div>
        </div>
        <span v-if="hazardLevel.level > 5" class="bg-[#FFC7D2] text-[#FF2D55] rounded-lg py-1 px-2 text-[15px] w-[80px]">
            {{ hazardLevel.text }}
        </span>
        <span v-else-if="hazardLevel.level <= 5 " class="bg-[#C5FFE2] text-[#52BA87] rounded-lg py-1 px-2 text-[15px] w-[80px]">
            {{ hazardLevel.text }}
        </span>
    </div>
</template>