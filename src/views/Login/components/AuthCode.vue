<script setup lang="ts">
import { ref,watch } from 'vue'
// const code = defineModel<string>('count')
const code = ref('')
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
const emits = defineEmits(["getCode"])
watch(code, (newVal, oldVal) => {
    if (newVal.length === 4) {
        console.log(newVal)
        emits('getCode', code.value)
    }
})
</script>

<template>
    <div class="relative">
        <el-input placeholder="请输入验证码" size="large" v-model="code" maxlength="4"/>
        <span 
            v-show = "!isSend"
            class="absolute right-4 top-1/2 -translate-y-1/2 text-primary text-sm cursor-pointer"
            @click="getCode">
            获取验证码
        </span>
        <span 
            v-show="isSend"
            class="absolute right-4 top-1/2 -translate-y-1/2 text-primary text-sm">
            {{ countdown }}秒后重发
        </span>
    </div>
</template>