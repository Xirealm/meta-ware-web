<script setup lang="ts">
import HazardLevelBar from "@/components/HazardLevelBar.vue";
const visible = defineModel("visible");
const props = defineProps<{
  data: any;
}>();
</script>

<template>
  <el-dialog
    :model-value="visible"
    @update:model-value="visible = $event"
    :title="data?.name + '的基本情况'"
    width="800px"
    :align-center="true"
    class="consultation-detail-dialog"
  >
    <el-scrollbar height="75vh" class="consultation-detail pr-8">
      <!-- 基本信息 -->
      <div class="basic-info mb-6">
        <h3 class="text-[#005F59] text-lg mb-4">基本信息</h3>
        <div class="flex gap-8 justify-between">
          <div class="info-item">
            <span class="label">年龄：</span>
            <span>{{ data?.age }}岁</span>
          </div>
          <div class="info-item">
            <span class="label">性别：</span>
            <span>{{ data?.gender }}</span>
          </div>
          <div class="info-item">
            <span class="label">电话：</span>
            <span>{{ data?.phone || "暂无" }}</span>
          </div>
          <div class="info-item">
            <span class="label">咨询时间：</span>
            <span>{{ data?.time }}</span>
          </div>
        </div>
      </div>

      <!-- 危险等级 -->
      <!-- <div class="risk-level mb-6">
        <h3 class="text-[#005F59] text-lg mb-4">危险等级</h3>
        <div class="flex">
          <HazardLevelBar :hazardLevel="data?.hazardLevel" />
        </div>
      </div> -->

      <!-- 标签 -->
      <!-- <div class="tags mb-6">
        <h3 class="text-[#005F59] text-lg mb-4">问题标签</h3>
        <div class="flex gap-2">
          <span
            v-for="(tag, index) in data?.label"
            :key="index"
            class="bg-[#E1F38E] rounded-lg py-1 px-3 text-[#005F59]"
          >
            {{ tag }}
          </span>
        </div>
      </div> -->

      <!-- 咨询记录 -->
      <div class="chat-records mb-6">
        <h3 class="text-[#005F59] text-lg mb-4">咨询记录</h3>
        <el-scrollbar height="200px" class="bg-[#F9F9F9] rounded-lg p-4">
          <div
            v-for="(record, index) in data?.chatRecords"
            :key="index"
            class="chat-item mb-4"
            :class="
              record.type === 'student'
                ? 'flex justify-end'
                : 'flex justify-start'
            "
          >
            <div class="flex flex-col max-w-[70%]">
              <div
                class="flex items-start gap-2"
                :class="record.type === 'student' ? 'flex-row-reverse' : ''"
              >
                <div
                  v-if="record.type === 'student'"
                  class="avatar w-8 h-8 rounded-full flex items-center justify-center text-white bg-[#52BA87]"
                >
                  学
                </div>
                <div v-else class="avatar w-8 h-8 rounded-full overflow-hidden">
                  <img
                    :src="record.expert.avatar"
                    class="w-full h-full object-cover"
                  />
                </div>
                <div class="flex flex-col">
                  <div
                    class="flex items-center gap-2 mb-1"
                    :class="record.type === 'student' ? 'flex-row-reverse' : ''"
                  >
                    <span
                      v-if="record.type === 'counselor'"
                      class="text-[#005F59] text-sm"
                    >
                      {{ record.expert.name }}
                    </span>
                    <span class="text-xs text-gray-400">{{ record.time }}</span>
                  </div>
                  <div
                    class="message rounded-lg p-2"
                    :class="
                      record.type === 'student' ? 'bg-[#E1F38E]' : 'bg-white'
                    "
                  >
                    <p class="text-sm">{{ record.content }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-scrollbar>
      </div>

      <!-- 回访信息 -->
      <div class="follow-up mb-6">
        <h3 class="text-[#005F59] text-lg mb-4">回访信息</h3>
        <div class="mb-4 flex items-center justify-between">
          <div class="info-item">
            <span class="label">负责人：</span>
            <span>{{ data?.followUpPerson }}</span>
          </div>
          <div
            class="status-tag"
            :class="{
              'bg-[#FFF4E5] text-[#FF9500]': data?.followUpStatus === '待回访',
              'bg-[#E1F38E] text-[#005F59]': data?.followUpStatus === '回访中',
              'bg-[#E8FAF4] text-[#52BA87]': data?.followUpStatus === '已解决',
            }"
          >
            {{ data?.followUpStatus }}
          </div>
        </div>

        <!-- 回访记录列表 -->
        <el-scrollbar v-if="data?.followUpRecords.length!==0" height="200px" class="bg-[#F9F9F9] rounded-lg p-4">
          <div
            v-for="(record, index) in data?.followUpRecords"
            :key="index"
            class="record-item mb-4 last:mb-0"
          >
            <div class="flex justify-between mb-2">
              <span class="font-medium">{{ record.name }}</span>
              <span class="text-gray-400 text-sm">{{ record.time }}</span>
            </div>
            <p class="text-sm text-gray-600">{{ record.content }}</p>
          </div>
        </el-scrollbar>
      </div>

      <!-- 咨询总结 -->
      <div class="consultation-record">
        <h3 class="text-[#005F59] text-lg mb-4">咨询总结</h3>
        <p class="text-gray-600 leading-7 whitespace-pre-wrap">
          {{ data?.summary }}
        </p>
      </div>
    </el-scrollbar>
  </el-dialog>
</template>

<style scoped>
.consultation-detail-dialog :deep(.el-dialog__header) {
  margin-right: 0;
  padding: 20px 24px;
  border-bottom: 1px solid #e4e4e4;
}

.consultation-detail-dialog :deep(.el-dialog__body) {
  padding: 24px;
}

.consultation-detail {
  .label {
    color: #8a8a8f;
  }
}

.info-item {
  display: flex;
  gap: 8px;
}

.status-tag {
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 14px;
}

.record-item {
  padding-bottom: 12px;
  border-bottom: 1px solid #e4e4e4;
}

.record-item:last-child {
  padding-bottom: 0;
  border-bottom: none;
}
</style>
