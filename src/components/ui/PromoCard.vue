<script setup lang="ts">
defineProps<{
  title: string
  description: string
  buttonText: string
  image: string
  to: string
}>()
</script>

<template>
  <div
    class="bg-[#FDF8F6] rounded-3xl py-5 px-8 flex justify-between items-center min-h-[150px] drop-shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
  >
    <div>
      <h3 class="font-semibold mb-2">
        {{ title }}
      </h3>

      <p class="text-sm text-gray-600 mb-4">
        {{ description }}
      </p>

      <RouterLink
        :to="to"
        class="flex w-36 items-center justify-center px-4 py-2 rounded-full bg-[#E0EBEC] drop-shadow-sm hover:bg-[#F5E5CF] transition"
      >
         {{ buttonText }}
      </RouterLink>
    </div>

    <div class="relative w-40 h-40">
      <img
        :src="image"
        class="absolute right-[-10px] bottom-[-10px] w-50 h-50 object-contain"
      >
    </div>
  </div>
</template>