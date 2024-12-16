<script setup lang="ts">
import IconMap from '@/assets/icons/IconMap.vue';
</script>
<template>
    <header class="bg-white w-full flex items-center justify-between">
        <div class="flex items-center">
            <IconMap class="mx-3"/>
            <div class="flex flex-col">
                <span class="text-[#666666] text-sm">您当前的位置</span>
                <span class="text-black">清华大学，海淀区</span>
            </div>
        </div>
        <div class="flex gap-4 items-center mr-5">
            <img src="@/assets/experts/expert1.png" class="rounded-full" alt="" width="36">
            <span>用户名</span>
        </div>
    </header>
</template>