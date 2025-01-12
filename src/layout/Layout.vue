<script setup lang="ts">
import Header from './header/Header.vue';
import Aside from './aside/Aside.vue';
import Main from './main/Main.vue';
</script>
<template>
    <div class="h-full w-full flex">
        <Aside class="w-[240px]"/>
        <div class="w-[calc(100%-240px)] ">
            <Header class="h-[80px]"/>
            <Main class="h-[calc(100vh-80px)]" />
        </div>
    </div>
</template>