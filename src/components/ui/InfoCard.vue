<script setup lang="ts">
defineProps<{
  title: string
  description: string
  buttonText: string
  image: string

  link?: string

  backgroundColor?: string
  imageClass?: string

  size?: 'hero' | 'service'
}>()
</script>

<template>
  <div
    :style="{ backgroundColor: backgroundColor ?? '#FDF8F6' }"
    :class="[
      'group relative overflow-hidden rounded-3xl drop-shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg',
      size === 'service'
        ? 'min-h-[220px] py-8 px-8'
        : 'min-h-[150px] py-5 px-8 flex items-center justify-between'
    ]"
  >
    <div class="relative z-10 max-w-[60%]">
      <h3 class="font-semibold mb-2">
        {{ title }}
      </h3>

      <p class="text-sm text-gray-600 mb-4">
        {{ description }}
      </p>

      <RouterLink
        v-if="link"
        :to="link"
        class="
          inline-flex
          items-center
          justify-center
          w-36
          py-2
          rounded-full
          bg-[#E0EBEC]
          drop-shadow-sm
          transition-all
          duration-200
          hover:bg-[#CFE1E3]
          hover:scale-105
        "
      >
        {{ buttonText }}
      </RouterLink>

      <button
        v-else
        class="
          inline-flex
          items-center
          justify-center
          w-36
          py-2
          rounded-full
          bg-[#E0EBEC]
          drop-shadow-sm
          transition-all
          duration-200
          hover:bg-[#CFE1E3]
          hover:scale-105
        "
      >
        {{ buttonText }}
      </button>
    </div>

    <img
      :src="image"
      alt=""
      :class="[
        'absolute object-contain transition-transform duration-300 group-hover:scale-105',
        imageClass
      ]"
    >
  </div>
</template>