<script setup lang="ts">
defineProps<{
  title: string
  image: string
}>()
</script>

<template>
  <div
    class="border-l border-gray-300 pl-4 flex flex-col items-center justify-center text-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
  >
    <img
      :src="image"
      class="w-20 h-20"
      alt=""
    >

    <span class="font-medium text-gray-700 text-sm">
      {{ title }}
    </span>
  </div>
</template>