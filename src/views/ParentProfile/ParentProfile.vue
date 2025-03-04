<script setup lang="ts">
import { ref, computed } from "vue";
import IconSearch from "@/assets/icons/IconSearch.vue";
import IconSchool from "@/assets/icons/IconSchool.vue";
import IconMore from "@/assets/icons/IconMore.vue";
import HazardLevelBar from "@/components/HazardLevelBar.vue";
import { mockTableData, mockSchoolList } from "@/mock/parentProfileData";

const activeSchool = ref(1);
const schoolList = ref(mockSchoolList);
const tableData = ref(mockTableData);
const query = ref({
  name: "",
  class: "",
  timeRange: "",
});
const size = ref("15");
const options = [
  {
    value: "15",
    label: "15",
  },
  {
    value: "20",
    label: "20",
  },
  {
    value: "30",
    label: "30",
  },
  {
    value: "40",
    label: "40",
  },
  {
    value: "50",
    label: "50",
  },
];
const searchSchoolKeyword = ref("");

const handleSearch = () => {
  // 这里添加搜索学校的逻辑
  console.log("搜索关键词:", searchSchoolKeyword.value);
};

const currentPage = ref(1);
const total = ref(mockTableData.length);

// 计算分页后的表格数据
const paginatedTableData = computed(() => {
  const startIndex = (currentPage.value - 1) * parseInt(size.value);
  const endIndex = startIndex + parseInt(size.value);
  return tableData.value.slice(startIndex, endIndex);
});

// 处理页码改变
const handleCurrentChange = (val: number) => {
  currentPage.value = val;
};

// 处理每页显示数量改变
const handleSizeChange = (val: string) => {
  size.value = val;
  currentPage.value = 1; // 重置到第一页
};
</script>
<template>
  <div class="flex h-full gap-6">
    <!-- 学校列表 -->
    <div
      class="w-[265px] shrink-0 bg-white rounded-lg flex flex-col flex-center items-center pb-6"
    >
      <h2 class="text-base my-4">门头沟区学校列表</h2>
      <!-- 学校搜索框 -->
      <div class="w-[90%]">
        <el-input
          v-model="searchSchoolKeyword"
          placeholder="搜索学校"
          class="input-grey"
          @keyup.enter="handleSearch"
        >
          <template #prefix>
            <IconSearch class="w-4 h-4 cursor-pointer" @click="handleSearch" />
          </template>
        </el-input>
      </div>
      <el-scrollbar class="px-2 mt-4">
        <button
          @click="activeSchool = item.id"
          v-for="(item, index) in schoolList"
          class="flex w-full text-sm p-3 items-center rounded-lg transition transition-duration-300 ease-in-out"
          :class="
            item.id === activeSchool
              ? 'text-[#005F59] bg-[#E1F38E]'
              : 'text-[#8A8A8F]'
          "
        >
          <IconSchool class="icon" />
          {{ item.name }}
        </button>
      </el-scrollbar>
    </div>
    <div
      class="flex-1 bg-white rounded-lg p-4 flex flex-col justify-between min-w-0"
    >   
    <div>
        <h2 class="text-base mb-4">家长档案数据展示</h2>
        <div class="flex items-center justify-between gap-8 mb-4 flex-wrap">
            <div class="flex gap-8 flex-wrap">
            <div>
                <el-input
                v-model="query.name"
                class="input-grey"
                style="width: 200px"
                placeholder="输入家长名字搜索"
                >
                <template #prefix>
                    <IconSearch class="w-4 h-4 cursor-pointer" />
                </template>
                </el-input>
            </div>
            <div>
                <label class="mr-2 text-[#666666]">咨询时间</label>
                <el-date-picker
                v-model="query.timeRange"
                class="input-grey"
                type="daterange"
                range-separator="To"
                start-placeholder="Start date"
                end-placeholder="End date"
                style="background: #f9f9f9"
                />
            </div>
            </div>
            <el-button type="primary" class="bg-[#52BA87] text-white">
            <IconMore class="mr-2" />
            <span>更多搜索</span>
            </el-button>
        </div>
    </div>
      <el-table
        class="flex-1"
        :data="paginatedTableData"
        style="width: 100%"
        header-row-class-name="table-header"
        cell-class-name="table-cell"
      >
        <el-table-column prop="id" label="序号" align="center" />
        <el-table-column prop="name" label="姓名" align="center" />
        <el-table-column prop="age" label="年龄" align="center" />
        <el-table-column prop="gender" label="性别" align="center" />
        <el-table-column prop="label" label="标签" width="240" align="center">
          <template #default="scope">
            <div class="flex justify-center gap-2">
              <span
                v-for="(item, index) in scope.row.label"
                :key="index"
                class="bg-[#E1F38E] rounded-lg py-1 px-2 text-[#005F59] text-[15px]"
              >
                {{ item }}
              </span>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          prop="time"
          label="咨询时间"
          width="120"
          align="center"
        />
        <el-table-column
          prop="hazardLevel"
          width="200"
          label="危险等级"
          align="center"
        >
          <template #default="scope">
            <HazardLevelBar :hazardLevel="scope.row.hazardLevel" />
          </template>
        </el-table-column>
        <el-table-column label="管理" align="center" width="180">
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
          <el-select
            v-model="size"
            placeholder="Select"
            style="width: 70px"
            class="input-grey"
            @change="handleSizeChange"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        <el-pagination
          background
          layout="prev, pager, next"
          :total="total"
          :page-size="parseInt(size)"
          :current-page="currentPage"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.icon {
  fill: currentColor;
  width: 20px;
  margin-right: 6px;
}
.input-grey {
  .el-input__wrapper {
    background: #f9f9f9;
    padding-left: 8px;
  }
  .el-select__wrapper {
    background: #f9f9f9;
  }
}
.el-table__header-wrapper {
  border-radius: 6px;
}
.table-header {
  background: #52ba87 !important;
  color: white;
  height: 50px !important;
  font-size: 15px;
  .el-table__cell {
    background: transparent !important;
    font-weight: 500;
  }
}
</style>
