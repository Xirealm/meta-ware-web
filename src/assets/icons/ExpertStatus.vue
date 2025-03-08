<script setup lang="ts">
import Connecting from "./status/Connecting.vue";
import Talking from "./status/Talking.vue";
import Busy from "./status/Busy.vue";
import Free from "./status/Free.vue";
import AfterCall from "./status/AfterCall.vue";
import Rest from "./status/Rest.vue";

type StatusType =
  | "connecting"
  | "talking"
  | "busy"
  | "free"
  | "afterCall"
  | "rest";

defineProps<{
  type: StatusType;
}>();
</script>

<template>
  <Connecting v-if="type === 'connecting'" />
  <Talking v-else-if="type === 'talking'" />
  <Busy v-else-if="type === 'busy'" />
  <Free v-else-if="type === 'free'" />
  <AfterCall v-else-if="type === 'afterCall'" />
  <Rest v-else-if="type === 'rest'" />
</template>
