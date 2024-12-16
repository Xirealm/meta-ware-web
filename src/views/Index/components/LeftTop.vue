<script setup lang="ts">
import { ref } from 'vue';
import InfoCards from './InfoCards.vue';
import ConsultationVolumeChart from './ConsultationVolumeChart.vue';

const dateRange = ref<string>("");
</script>
<template>
    <div class="h-full w-full flex flex-wrap">
        <div class="mb-0 flex justify-between w-full ">
            <h2>数据概览</h2>
            <div class="w-[36%]">
                <el-date-picker
                    style="width: 100%"
                    v-model="dateRange"
                    type="daterange"
                    range-separator="To"
                    start-placeholder="Start date"
                    end-placeholder="End date"
                />
            </div>
        </div>
        <div class="flex w-full">
            <InfoCards class="w-[26%] h-full min-w-[240px] mr-4"/>
            <el-scrollbar class="w-[74%] h-full">
                <ConsultationVolumeChart class="w-[100%] h-[37vh]"/>
            </el-scrollbar>
        </div>
    </div>
</template>