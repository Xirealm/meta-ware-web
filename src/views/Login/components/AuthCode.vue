<script setup lang="ts">
import { ref } from 'vue'
const code = defineModel<string>('count')
const isSend = ref(false)
const countdown = ref(60)
const getCode = async () => {
    isSend.value = true
    const timer = setInterval(() => {
        countdown.value--
        if (countdown.value <= 0) {
            clearInterval(timer)
            isSend.value = false
            countdown.value = 60
        }
    }, 1000)
}
</script>

<template>
    <div class="relative">
        <el-input placeholder="请输入验证码" size="large" v-model="code" maxlength="4"/>
        <button 
            v-show = "!isSend"
            class="absolute right-4 top-1/2 -translate-y-1/2 text-primary text-sm"
            @click="getCode">
            获取验证码
        </button>
        <span 
            v-show="isSend"
            class="absolute right-4 top-1/2 -translate-y-1/2 text-primary text-sm">
            {{ countdown }}秒后重发
        </span>
    </div>
</template>