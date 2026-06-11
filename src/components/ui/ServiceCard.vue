<script setup lang="ts">
defineProps<{
  title: string
  description: string
  buttonText: string
  image: string
  backgroundColor: string
  imageClass?: string
}>()
</script>

<template>
  <div
    :style="{ backgroundColor }"
    class="relative overflow-hidden rounded-3xl py-8 px-8 min-h-[220px] bg-[#EFE8E1] drop-shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
  >
    <img
      :src="image"
      alt=""
      :class="[
        'absolute object-contain translate-x-3 translate-y-3 transition-transform duration-300 group-hover:scale-105',
        imageClass
      ]"
    >

    <div class="relative z-10 max-w-[60%]">
      <h3 class="font-semibold text-lg mb-3">
        {{ title }}
      </h3>

      <p class="text-sm text-gray-600 mb-5">
        {{ description }}
      </p>

      <button
        class="
          px-6
          py-2
          w-36
          rounded-full
          bg-[#E1ECED]
          drop-shadow-sm
          hover:bg-[#F5E5CF]
          transition
        "
      >
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>