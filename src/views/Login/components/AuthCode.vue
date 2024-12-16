<script setup lang="ts">
import { ref, watch } from 'vue'
import { ElMessage } from 'element-plus'
const props = defineProps({
    phone: String
})
// const code = defineModel<string>('count')
const code = ref('')
const isSend = ref(false)
const countdown = ref(60)
const sendCode = async () => {
    const phoneRegex = /^1[3-9]\d{9}$/;
    if (!phoneRegex.test(props.phone!) || props.phone!.length !== 11) {
        ElMessage.error('手机号格式错误');
        return
    }
    isSend.value = true
    emits('sendCode')
    const timer = setInterval(() => {
        countdown.value--
        if (countdown.value <= 0) {
            clearInterval(timer)
            isSend.value = false
            countdown.value = 60
        }
    }, 1000)
}
const emits = defineEmits(["getCode","sendCode"])
watch(code, (newVal, oldVal) => {
    if (newVal.length === 4) {
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
            @click="sendCode">
            获取验证码
        </span>
        <span 
            v-show="isSend"
            class="absolute right-4 top-1/2 -translate-y-1/2 text-primary text-sm">
            {{ countdown }}秒后重发
        </span>
    </div>
</template>