<script setup lang="ts">
import { ref } from "vue";

enum State {
  pswLogin = 0,
  codeLogin = 1,
  register = 2,
}
const state = ref<State>(State.pswLogin);
</script>
<template>
  <div class="bg w-full h-full relative">
    <img
      src="/src/assets/images/logo.png"
      class="absolute top-[5vh] right-[5vw] h-[8vh]"
      alt=""
    />
    <img
      src="/src/assets/images/login/pic_login.png"
      class="absolute bottom-[15vh] right-[6vw] h-[55vh]"
      alt=""
    />
    <div
      class="absolute left-0 w-[45vw] h-full flex flex-col px-[10vw] py-[22vh]"
    >
      <span class="font-bold text-[34px] text-[#263238]">欢迎来到</span>
      <span class="font-bold text-[48px] mt-[1vh] text-[#263238]">
        <span class="text-[#369FFF]">水木心育</span>
        云平台
      </span>
      <span class="font-bolder text-sm">
        <span class="text-[#B3B3B3]">没有账号？</span>
        <span class="font-bold text-[#369FFF]" @click="state = State.register"
          >立即注册</span
        >
      </span>
      <div
        class="flex justify-between my-[2vh] bg-[#EBF0F2] rounded-md text-[#263238]"
      >
        <button
          class="flex-1 bg-white m-1 px-[20px] py-[8px] rounded-md font-bold"
        >
          密码登录
        </button>
        <button class="flex-1 m-1 px-[20px] py-[8px]">验证码登录</button>
      </div>
      <div class="flex flex-col justify-between h-[22vh]">
        <el-input placeholder="请输入账号" size="large" />
        <el-input placeholder="请输入密码" size="large" />
        <span class="flex justify-between text-sm text-[#B3B3B3]">
          <span class="flex items-center">
            <el-checkbox />
            <span class="ml-1">记住账号</span>
          </span>
          <span class="flex items-center">忘记密码？</span>
        </span>
        <el-button type="primary" size="large">登陆</el-button>
      </div>
      <span class="flex justify-center text-sm mt-[4vh] text-[#B3B3B3]"
        >其他登陆方式</span
      >
    </div>
  </div>
</template>
<style lang="scss">
.bg {
  background: url("/src/assets/images/login/bg_login.jpg") no-repeat center;
  background-size: 100%;
}
.font {
  font-family: Plus Jakarta Sans;
}
</style>
