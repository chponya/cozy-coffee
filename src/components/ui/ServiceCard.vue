<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <div
    class="bg-[#F8F2EC] rounded-3xl p-6 flex justify-between min-h-[200px]"
  >
    <div>
      <h3 class="font-semibold mb-3">
        {{ title }}
      </h3>

      <p class="text-sm text-gray-600 mb-4">
        {{ description }}
      </p>

      <button
        class="px-4 py-2 rounded-full bg-white"
      >
        Подробнее →
      </button>
    </div>

    <div
      class="w-32 h-32 bg-[#E8DED5] rounded-2xl flex items-center justify-center"
    >
      IMG
    </div>
  </div>
</template>