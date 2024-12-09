<script setup lang="ts">
import Header from './header/Header.vue';
import Aside from './aside/Aside.vue';
import Main from './main/Main.vue';
</script>
<template>
    <div class="h-full w-full flex ">
        <Aside />
        <div class="flex flex-col w-full  bg-black">
            <Header />
            <Main class="flex-1" />
        </div>
    </div>
</template>