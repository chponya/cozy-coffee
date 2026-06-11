<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <div
    class="bg-white rounded-3xl p-5 flex justify-between items-center min-h-[150px]"
  >
    <div>
      <h3 class="font-semibold mb-2">
        {{ title }}
      </h3>

      <p class="text-sm text-gray-600 mb-4">
        {{ description }}
      </p>

      <button
        class="px-4 py-2 rounded-full bg-[#F5F0EB]"
      >
        Подробнее →
      </button>
    </div>

    <div
      class="w-24 h-24 rounded-2xl bg-[#EFE8E1] flex items-center justify-center"
    >
      IMG
    </div>
  </div>
</template>