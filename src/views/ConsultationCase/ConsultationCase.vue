<script setup lang="ts">
import { ref } from 'vue'
import IconSearch from '@/assets/icons/IconSearch.vue';
import IconSchool from '@/assets/icons/IconSchool.vue';
import HazardLevelBar from '@/components/HazardLevelBar.vue';
const activeSchool = ref(1)
const schoolList = ref([
    { name: '北京市门头沟第一附中', id: 1 },
    { name: '北京市门头沟第一附中', id: 2 },
    { name: '北京市门头沟第一附中', id: 3 },
    { name: '北京市门头沟第一附中', id: 4 },
    { name: '北京市门头沟第一附中', id: 5 },
    { name: '北京市门头沟第一附中', id: 6 },
    { name: '北京市门头沟第一附中', id: 7 },
    { name: '北京市门头沟第一附中', id: 8 },
    { name: '北京市门头沟第一附中', id: 9 },
    { name: '北京市门头沟第一附中', id: 10 },
    { name: '北京市门头沟第一附中', id: 11 },
    { name: '北京市门头沟第一附中', id: 12 },
    { name: '北京市门头沟第一附中', id: 13 },
    { name: '北京市门头沟第一附中', id: 14 },
    { name: '北京市门头沟第一附中', id: 15 },
    { name: '北京市门头沟第一附中', id: 16 },
    { name: '北京市门头沟第一附中', id: 17 },
    { name: '北京市门头沟第一附中', id: 18 },
    { name: '北京市门头沟第一附中', id: 19 },
    { name: '北京市门头沟第一附中', id: 20 },
    { name: '北京市门头沟第一附中', id: 21 },
    { name: '北京市门头沟第一附中', id: 22 },
    { name: '北京市门头沟第一附中', id: 23 },
    { name: '北京市门头沟第一附中', id: 24 },
    { name: '北京市门头沟第一附中', id: 25 },
    { name: '北京市门头沟第一附中', id: 26 },
    { name: '北京市门头沟第一附中', id: 27 },
    { name: '北京市门头沟第一附中', id: 28 },
    { name: '北京市门头沟第一附中', id: 29 },
    { name: '北京市门头沟第一附中', id: 30 },
    { name: '北京市门头沟第一附中', id: 31 },
    { name: '北京市门头沟第一附中', id: 32 },
    { name: '北京市门头沟第一附中', id: 33 },
    { name: '北京市门头沟第一附中', id: 34 },
    { name: '北京市门头沟第一附中', id: 35 },
    { name: '北京市门头沟第一附中', id: 36 },
    { name: '北京市门头沟第一附中', id: 37 },
    { name: '北京市门头沟第一附中', id: 38 },
    { name: '北京市门头沟第一附中', id: 39 },
    { name: '北京市门头沟第一附中', id: 40 },
])
const tableData = [
    {
        id: '1',
        name: '李三石',
        age: 16,
        gender: '男',
        label: [
            '学习问题',
            '人际关系'
        ],
        time: "2025-01-07",
        hazardLevel: {
            level: 9,
            text: '一级关注'
        }
    },
    {
        id: '2',
        name: '李三石',
        age: 16,
        gender: '男',
        label: [
            '学习问题',
            '人际关系'
        ],
        time: "2025-01-07",
        hazardLevel: {
            level: 9,
            text: '一级关注'
        }
    },
    {
        id: '3',
        name: '李三石',
        age: 16,
        gender: '男',
        label: [
            '学习问题',
            '人际关系'
        ],
        time: "2025-01-07",
        hazardLevel: {
            level: 9,
            text: '一级关注'
        }
    },
    {
        id: '4',
        name: '李三石',
        age: 16,
        gender: '男',
        label: [
            '学习问题',
            '人际关系'
        ],
        time: "2025-01-07",
        hazardLevel: {
            level: 4,
            text: '良好'
        }
    },
    {
        id: '5',
        name: '李三石',
        age: 16,
        gender: '男',
        label: [
            '学习问题',
            '人际关系'
        ],
        time: "2025-01-07",
        hazardLevel: {
            level: 9,
            text: '一级关注'
        }
    },
    {
        id: '6',
        name: '李三石',
        age: 16,
        gender: '男',
        label: [
            '学习问题',
            '人际关系'
        ],
        time: "2025-01-07",
        hazardLevel: {
            level: 9,
            text: '一级关注'
        }
    },
    {
        id: '7',
        name: '李三石',
        age: 16,
        gender: '男',
        label: [
            '学习问题',
            '人际关系'
        ],
        time: "2025-01-07",
        hazardLevel: {
            level: 9,
            text: '一级关注'
        }
    },
    {
        id: '8',
        name: '李三石',
        age: 16,
        gender: '男',
        label: [
            '学习问题',
            '人际关系'
        ],
        time: "2025-01-07",
        hazardLevel: {
            level: 9,
            text: '一级关注'
        }
    },
    {
        id: '9',
        name: '李三石',
        age: 16,
        gender: '男',
        label: [
            '学习问题',
            '人际关系'
        ],
        time: "2025-01-07",
        hazardLevel: {
            level: 9,
            text: '一级关注'
        }
    },
    {
        id: '10',
        name: '李三石',
        age: 16,
        gender: '男',
        label: [
            '学习问题',
            '人际关系'
        ],
        time: "2025-01-07",
        hazardLevel: {
            level: 9,
            text: '一级关注'
        }
    },
    {
        id: '11',
        name: '李三石',
        age: 16,
        gender: '男',
        label: [
            '学习问题',
            '人际关系'
        ],
        time: "2025-01-07",
        hazardLevel: {
            level: 9,
            text: '一级关注'
        }
    },
    {
        id: '12',
        name: '李三石',
        age: 16,
        gender: '男',
        label: [
            '学习问题',
            '人际关系'
        ],
        time: "2025-01-07",
        hazardLevel: {
            level: 9,
            text: '一级关注'
        }
    },
    {
        id: '13',
        name: '李三石',
        age: 16,
        gender: '男',
        label: [
            '学习问题',
            '人际关系'
        ],
        time: "2025-01-07",
        hazardLevel: {
            level: 9,
            text: '一级关注'
        }
    },
    {
        id: '14',
        name: '李三石',
        age: 16,
        gender: '男',
        label: [
            '学习问题',
            '人际关系'
        ],
        time: "2025-01-07",
        hazardLevel: {
            level: 9,
            text: '一级关注'
        }
    },
]
const query = ref({
    name: '',
    class: '',
    timeRange: '',
})
const size = ref('14')
const options = [
  {
    value: '14',
    label: '14',
  },
  {
    value: '20',
    label: '20',
  },
  {
    value: '30',
    label: '30',
  },
  {
    value: '40',
    label: '40',
  },
  {
    value: '50',
    label: '50',
  },
]
</script>
<template>
    <div class="flex h-full gap-6">
        <div class="min-w-[220px] bg-white rounded-lg flex flex-col flex-center items-center pb-6">
            <h2 class="text-base my-4">海淀区学校列表</h2>
            <div class="bg-[#efeff7] w-[90%] p-3 rounded-lg text-[#8A8A8F] text-sm flex items-center gap-2">
                <IconSearch class="w-6"/>
                <input type="text" placeholder="搜索学校" class="bg-transparent w-full outline-none">
            </div>
            <el-scrollbar class="px-2 mt-4">
                <button 
                    @click = "activeSchool = item.id"
                    v-for="(item, index) in schoolList" 
                    class="flex text-sm p-3 items-center text-[#8A8A8F] rounded-xl transition transition-duration-300 ease-in-out"
                    :class="item.id === activeSchool ? 'text-[#005F59] bg-[#E1F38E]' : ''">
                    <IconSchool class="icon"/>
                    {{ item.name }}     
                </button>
            </el-scrollbar>
        </div>
        <div class="flex-1 bg-white rounded-lg p-4">
            <div class="fixed top-[20px] h-[40px] flex items-center gap-4">
                <div>
                    <label class="mr-2">姓名</label>
                    <el-input v-model="query.name" class="input-grey" style="width: 160px;" placeholder=""/>
                </div>
                <div>
                    <label class="mr-2">班级</label>
                    <el-input v-model="query.class" class="input-grey" style="width: 160px" placeholder=""/>
                </div>
                <div>
                    <label class="mr-2">咨询时间</label>
                    <el-date-picker
                        v-model="query.timeRange"
                        type="daterange"
                        range-separator="To"
                        start-placeholder="Start date"
                        end-placeholder="End date"
                        style="background: #EFEFF4;"
                    />
                </div>
            </div>
            <el-table :data="tableData" style="width: 100%" header-row-class-name="table-header" cell-class-name="table-cell">
                <el-table-column prop="id" label="序号" width="80" align="center"/>
                <el-table-column prop="name" label="姓名" width="100" align="center"/>
                <el-table-column prop="age" label="年龄" width="80" align="center"/>
                <el-table-column prop="gender" label="性别" width="80" align="center"/>
                <el-table-column prop="label" label="标签" align="center">
                    <template #default="scope">
                        <div class="flex justify-center gap-2">
                            <span 
                                v-for="(item, index) in scope.row.label" 
                                :key="index" 
                                class="bg-[#E1F38E] rounded-lg py-1 px-2 text-[#005F59] text-[15px]">
                                {{ item }}
                            </span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="time" label="咨询时间" width="120" align="center"/>
                <el-table-column prop="hazardLevel" label="危险等级" align="center">
                    <template #default="scope">
                        <HazardLevelBar :hazardLevel="scope.row.hazardLevel"/>
                    </template>
                </el-table-column>
                <el-table-column label="管理" align="center">
                    <template #default="scope">
                        <div class="flex justify-center gap-6">
                            <button class="text-[#005F59] text-[15px]">查看详情</button>
                            <button class="text-[#FF2D55] text-[15px]">删除</button>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
            <div class="h-[36px] flex items-center justify-between mt-6">
                <div>
                    <span class="text-[#8a8a8f] text-sm mr-2">每页结果</span>
                    <el-select v-model="size" placeholder="Select" style="width: 70px" class="input-grey">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        />
                    </el-select>
                </div>
                <el-pagination background layout="prev, pager, next" :total="120" :page-size="6"/>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.icon{
    fill: currentColor;
    width: 20px;
    margin-right: 6px;
}
.input-grey{
    .el-input__wrapper{
        background: #EFEFF4;
    }
    .el-select__wrapper{
        background: #EFEFF4;
    }
}
.el-table__header-wrapper{
    border-radius: 6px;
}
.table-header {
    background: #52BA87 !important;
    color: white;
    height: 50px !important;
    font-size: 15px;
    .el-table__cell{
        background: transparent !important;
        font-weight: 500 ;
    }
}
// .table-cell{
//     background: ;
// }
</style>