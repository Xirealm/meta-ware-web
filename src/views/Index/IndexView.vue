<script setup lang="ts">
import InfoCards from './components/InfoCards.vue';
import RightTop from './components/RightTop.vue';
import RightBottom from './components/RightBottom.vue';
import LeftTop from './components/LeftTop.vue';
import LeftBottom from './components/LeftBottom.vue';
</script>
<template>
    <div class="flex flex-col gap-4 w-full h-full">
        <div class="w-full h-[55%] flex justify-between gap-4">
            <div class="bg-white h-full w-[69%] rounded-md p-4">
                <LeftTop class="w-full h-full"/>
            </div>
            <div class="bg-white flex-4 h-full w-[30%] rounded-md p-4">
                <RightTop class="w-full h-full"/>
            </div>
        </div>
        <div class="w-full h-[45%] flex gap-4 justify-between">
            <div class="bg-white h-full w-[28%] rounded-md p-4">
                <LeftBottom class="w-full h-full"/>
            </div>
            <div class="bg-white flex-4 h-full w-[72%] rounded-md p-4">
                <RightBottom class="w-full h-full"/>
            </div>
        </div>
    </div>
</template>