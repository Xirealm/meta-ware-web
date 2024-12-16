<script setup lang="ts">
import { ref } from "vue"
const infos = ref([
    {
        title: "注册用户",
        value: "10141 人",
        rate:  "+18.6%"
    },
    {
        title: "完成咨询量",
        value: "1225 次",
        rate:  "+3.9%"
    },
    {
        title: "预警已解决",
        value: "1023 次",
        rate:  "+8.4%"
    },
])
</script>
<template>
    <div class="flex flex-col justify-between gap-4">
        <div class="w-full bg-[#E1F38E] flex-1 flex flex-col py-3 px-5 justify-between rounded-md">
            <span class="text-[#666666] text-sm">{{ infos[0].title }}</span>
            <span class="text-2xl">{{ infos[0].value }}</span>
            <div class="bg-white rounded-full py-1 px-4 text-sm">
                <span class="text-[#52BA87] mr-1">{{ infos[0].rate }}</span>
                <span class="text-[#8A8A8F]">from last month</span>
            </div>
        </div>
        <div class="w-full bg-[#52BA87] flex-1 flex flex-col py-3 px-5 justify-between rounded-md">
            <span class="text-white text-sm">{{ infos[1].title }}</span>
            <span class="text-2xl text-white">{{ infos[1].value }}</span>
            <div class="bg-white rounded-full py-1 px-4 text-sm">
                <span class="text-[#52BA87] mr-1">{{ infos[1].rate }}</span>
                <span class="text-[#8A8A8F]">from last month</span>
            </div>
        </div>
        <div class="w-full bg-[#005F59] flex-1 flex flex-col py-3 px-5 justify-between rounded-md">
            <span class="text-white text-sm">{{ infos[2].title }}</span>
            <span class="text-2xl text-white">{{ infos[2].value }}</span>
            <div class="bg-white rounded-full py-1 px-4 text-sm">
                <span class="text-[#52BA87] mr-1">{{ infos[2].rate }}</span>
                <span class="text-[#8A8A8F]">from last month</span>
            </div>
        </div>
    </div>
</template>""