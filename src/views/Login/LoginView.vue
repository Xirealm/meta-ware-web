<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
import { useUserAPI } from "@/services/user";
const userApi = useUserAPI();
import { useUserStore } from "@/stores/user";
const userStore = useUserStore();
import { ElMessage } from "element-plus";
import { isAnyFieldEmpty } from "@/utils/emptyCheck";
enum State {
    PswLogin = 0,
    CodeLogin = 1,
    Register = 2,
}
const state = ref<State>(State.PswLogin);
const toggleState = () => {
    state.value = state.value === State.Register ? State.PswLogin : State.Register;
    console.log(state.value);
};

const loginData = ref({
    phone: "",
    password: "",
    code: "",
    remember: false,
});
const pswLoginData = computed(() => {
    return {
        phone: loginData.value.phone,
        password: loginData.value.password,
        remember: loginData.value.remember,
    };
});
const codeLoginData = computed(() => {
    return {
        phone: loginData.value.phone,
        code: loginData.value.code,
        remember: loginData.value.remember,
    }
});
const loginByPsw = async () => {
    const phone = loginData.value.phone;
    const password = loginData.value.password;
    const res = await userApi.postLoginByPsw(phone, password)
    console.log(res);
    if (res.code === 200) {
        ElMessage.success("登录成功");
        userStore.setToken(res.data);
        router.push("/");
    }else{
        ElMessage.error("密码错误");
    }
};
const loginByCode = async () => {
    const phone = loginData.value.phone;
    const code = loginData.value.code;
    const res = await userApi.postLoginByCode(phone, code)
    if (res.code === 200) {
        ElMessage.success("登录成功");
        // userStore.setToken(res.data);
        router.push({
            name:'index'
        });
        console.log(444);
        
    }else{
        ElMessage.error("验证码错误");
    }
};
const login = () => {
    if (state.value === State.PswLogin) {
        loginByPsw();
    } else if (state.value === State.CodeLogin) {
        loginByCode();
    }
};

const registerData = ref({
    phone: "",
    password1: "",
    password2: "",
    code: "",
    agree: false,
});
  
const register = async () => {
    const phone = registerData.value.phone;
    if (registerData.value.password1 !== registerData.value.password2) {
        ElMessage.error("两次输入密码不一致");
        return
    }
    const password = registerData.value.password1;
    const code = registerData.value.code;
    const res = await userApi.postRegister(phone, password, code)
    if (res.code === 200) {
        ElMessage.success("注册成功，请登录");
        state.value = State.PswLogin;
    }
};

</script>
<template>
  <div class="w-full h-full fixed t-0 b-0">
    <img src="/src/assets/images/login/bg_login.jpg" alt="" class="fixed t-0 b-0 l-0 r-0">
    <img
        src="/src/assets/images/logo.png"
        class="absolute top-[5vh] right-[5vw] h-[8vh]"
        alt=""
    />
    <img
        v-if="state === State.Register"
        src="/src/assets/images/login/pic_register.png"
        class="absolute bottom-[10vh] right-[12vw] h-[60vh] hidden lg:block"
        alt=""
    />
    <img
        v-else
        src="/src/assets/images/login/pic_login.png"
        class="absolute bottom-[12vh] right-[6vw] h-[58vh] hidden lg:block"
        alt=""
    />
    <div
        class="absolute left-0 w-[760px] h-full flex flex-col px-[10vw] py-[22vh]"
    >
        <span class="font-bold text-[32px] text-[#263238]">
            欢迎{{ state === State.Register ? '注册' : '来到' }}
        </span>
        <span class="font-bold text-[48px] mt-[1vh] text-[#263238]">
            <span class="text-primary">水木心育</span>
            云平台
        </span>
        <span class="font-bolder text-sm mb-4">
            <span class="text-[#B3B3B3]">
                {{ state === State.Register ? '已有' : '没有' }}账号？
            </span>
            <button 
                class="font-bold text-primary" 
                @click="toggleState">
                立即{{ state === State.Register ? '登录' : '注册' }}
            </button>
        </span>
        <div
            v-if="state !== State.Register"
            class="flex justify-between mb-4 bg-[#EBF0F2] rounded-md text-[#263238] text-sm"
        >
            <button
                class="flex-1 m-1 px-[20px] py-[8px] transition-all duration-300 ease-in-out"
                :class="state === State.PswLogin ? 'bg-white rounded-md font-bold' : '' "
                @click = "state = State.PswLogin"
            >
                密码登录
            </button>
            <button 
                class="flex-1 m-1 px-[20px] py-[8px] transition-all duration-300 ease-in-out"
                :class="state === State.CodeLogin ? 'bg-white rounded-md font-bold' : '' "
                @click="state = State.CodeLogin"
            >   
                验证码登录
            </button>
        </div>
        <div v-if="state !== State.Register" class="flex flex-col justify-evenly min-h-[300px]">
            <el-input placeholder="请输入手机号" size="large" v-model="loginData.phone"/>
            <el-input 
                v-if="state === State.PswLogin" 
                show-password
                placeholder="请输入密码" size="large" 
                v-model = "loginData.password"/>
            <div v-else class="relative">
                <el-input placeholder="请输入验证码" size="large" v-model="loginData.code" />
                <button 
                    class="absolute right-4 top-1/2 -translate-y-1/2 text-primary
                    text-sm">
                    获取验证码
                </button>
            </div>
            <span class="flex justify-between text-sm text-[#B3B3B3]">
                <span class="flex items-center">
                    <el-checkbox v-model="loginData.remember"/>
                    <button class="ml-1">记住账号</button>
                </span>
                <button v-if="state === State.PswLogin" class="flex items-center">忘记密码？</button>
            </span>
            <el-button 
                type="primary" size="large"
                :disabled="state === State.PswLogin ? isAnyFieldEmpty(pswLoginData) : isAnyFieldEmpty(codeLoginData)"
                @click="login"
            >
                登陆
            </el-button>
            <span class="flex justify-center text-sm mt-[4vh] text-[#B3B3B3]">
                其他登陆方式
            </span>
        </div>
        <div v-else class="flex flex-col justify-between min-h-[440px]">
            <el-form
                label-position="top"
                label-width="auto"
                :model="registerData"
            >
                <el-form-item label="手机号">
                    <el-input placeholder="请输入手机号" size="large" v-model="registerData.phone"/>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input show-password placeholder="请输入8-12位密码" size="large" v-model = "registerData.password1"/>
                </el-form-item>
                <el-form-item label="确认密码">
                    <el-input show-password placeholder="请再次输入密码" size="large" v-model = "registerData.password2"/>
                </el-form-item>
                <el-form-item label="验证码">
                    <div class="relative w-full">
                        <el-input placeholder="请输入验证码" size="large" v-model="registerData.code" />
                        <button 
                            class="absolute right-4 top-1/2 -translate-y-1/2 text-primary
                            text-sm">
                            获取验证码
                        </button>
                    </div>
                </el-form-item>
                <span class="flex justify-between text-sm text-[#B3B3B3]">
                    <span class="flex items-center">
                        <el-checkbox v-model="registerData.agree"/>
                        <span class="ml-1">
                            我已阅读并同意
                            <button>
                                <span class="text-primary">《服务条款》</span>
                            </button>
                            和
                            <button>
                                <span class="text-primary">《隐私政策》</span>
                            </button>
                        </span>
                    </span>
                </span>
            </el-form>
            <el-button 
                type="primary" size="large" @click="register"
                :disabled="isAnyFieldEmpty(registerData)">
                注册
            </el-button>
        </div>
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
