<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import { useRouter,useRoute } from 'vue-router';
const router = useRouter()
const route = useRoute()
import IconDashboard from '@/assets/icons/IconDashboard.vue';
import IconChart from '@/assets/icons/IconChart.vue';
import IconMoney from '@/assets/icons/IconMoney.vue';
import IconHome from '@/assets/icons/IconHome.vue';
import IconLogout from '@/assets/icons/IconLogout.vue';
import { onMounted } from 'vue';
import { useUserStore } from '@/stores/user';
const userStore = useUserStore()
import { useUserAPI } from '@/services/user';
const userAPI = useUserAPI()
// onMounted(() => {
//   console.log(route)
// })
// const handleOpen = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath)
// }
// const handleClose = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath)
// }
const logout = async () => {
  userStore.setToken("")
  const result = await userAPI.postLogout()
  console.log(result);
  
//   router.push('/login')
}
</script>

<template>
    <div class="h-full bg-white border-r-2 border-[#ebebeba5] flex flex-col items-center relative">
        <div class="h-[70px] w-full flex items-center">
            <img src="@/assets/images/logo_green.png" alt="" class="h-[36px] ml-6">
        </div>
        <div class="w-[200px] bg-red-400 mt-12">
            <el-menu
                default-active="1"
                @open="handleOpen"
                @close="handleClose"
                text-color="#8A8A8F"
                active-text-color="#E1F38E"
            >
                <el-menu-item index="1">
                    <IconDashboard class="icon"/>
                    <span>智慧看板</span>
                </el-menu-item>
                <el-sub-menu index="2">
                    <template #title>
                        <IconChart class="icon"/>
                        <span>教研成果</span>
                    </template>
                    <el-menu-item index="2-1">
                        <el-icon><Document /></el-icon>
                        <span>成果一</span>
                    </el-menu-item>
                </el-sub-menu>
                <el-menu-item index="3">
                    <IconMoney class="icon"/>
                    <span>社会价值</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <IconHome class="icon"/>
                    <span>系统管理</span>
                </el-menu-item>
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
    margin-right: 15px;
}
</style>