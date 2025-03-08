<script lang="ts" setup>
import { RouterView , RouterLink } from 'vue-router';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter()
const route = useRoute()
import IconDashboard from '@/assets/icons/IconDashboard.vue';
import IconChart from '@/assets/icons/IconChart.vue';
import IconMoney from '@/assets/icons/IconMoney.vue';
import IconHome from '@/assets/icons/IconHome.vue';
import IconParent from '@/assets/icons/IconParent.vue';
import IconConsult from '@/assets/icons/IconConsult.vue';
import IconLogout from '@/assets/icons/IconLogout.vue';
import { ref,onMounted } from 'vue';
import { useUserStore } from '@/stores/user';
const userStore = useUserStore()
import { useUserAPI } from '@/services/user';
const userAPI = useUserAPI()
const currentRouteName = ref('')
onMounted(() => {
    currentRouteName.value = route.name as string
})
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const logout = async () => {
  userStore.setToken("")
  const result = await userAPI.postLogout()
  console.log(result);  
  router.push('/login')
}
</script>

<template>
    <div class="h-full bg-white border-r-2 border-[#ebebeba5] flex flex-col items-center relative">
        <div class="h-[70px] w-full flex items-center">
            <img src="@/assets/images/logo_green.png" alt="" class="h-[36px] ml-6">
        </div>
        <div class="w-[200px] bg-red-400 mt-12">
            <el-menu
                :default-active="currentRouteName"
                @open="handleOpen"
                @close="handleClose"
                text-color="#8A8A8F"
                active-text-color="#E1F38E"
            >
                <RouterLink :to="{name: 'index'}">
                    <el-menu-item index="index">
                        <IconDashboard class="icon"/>
                        <span>智慧看板</span>
                    </el-menu-item>
                </RouterLink>
                <!-- <el-sub-menu index="2">
                    <template #title>
                        <IconChart class="icon"/>
                        <span>教研成果</span>
                    </template>
                    <RouterLink :to="{name: 'parentProfile'}">
                        <el-menu-item index="parentProfile">
                            <IconParent class="icon"/>
                            <span>家长档案</span>
                        </el-menu-item>
                    </RouterLink>
                    <RouterLink :to="{name: 'consultationCase'}">
                        <el-menu-item index="2-2">
                            <IconConsult class="icon"/>
                            <span>咨询案例</span>
                        </el-menu-item>
                    </RouterLink>
                </el-sub-menu> -->
                <RouterLink :to="{name: 'consultationInformation'}">
                    <el-menu-item index="consultationInformation">
                        <IconConsult class="icon"/>
                        <span>来访信息</span>
                    </el-menu-item>
                </RouterLink>
                <!-- <RouterLink :to="{name: 'index'}">
                    <el-menu-item index="4">
                        <IconHome class="icon"/>
                        <span>系统管理</span>
                    </el-menu-item>
                </RouterLink> -->
            </el-menu>
        </div>
        <div class="absolute bottom-12 pl-6 text-[#8A8A8F] flex  w-[200px]">
            <button class="flex items-center" @click="logout">
                <IconLogout class="icon"/>退出登录
            </button>
        </div>
    </div>
</template>
<style scoped>
.el-menu-item.is-active {
    background-color: #005F59;
}

.icon{
    fill: currentColor;
    width: 16px;
    margin-right: 15px;
}
</style>