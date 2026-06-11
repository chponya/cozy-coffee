<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div
    class="h-40 rounded-3xl border-2 border-dashed border-gray-300 bg-white flex items-center justify-center"
  >
    <span class="font-medium text-gray-500 text-center">
      {{ title }}
    </span>
  </div>
</template>