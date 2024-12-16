<script setup lang="ts">
import Header from './header/Header.vue';
import Aside from './aside/Aside.vue';
import Main from './main/Main.vue';
</script>
<template>
    <div class="h-full w-full flex">
        <Aside class="w-[240px]"/>
        <div class="w-[calc(100vw-240px)] ">
            <Header class="h-[8vh]"/>
            <Main class="h-[92vh]" />
        </div>
    </div>
</template>