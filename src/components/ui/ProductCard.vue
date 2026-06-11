<script setup lang="ts">
  import type { Product } from '../../types/product'

  defineProps<{
    product: Product
  }>()
</script>

<template>
  <div class="w-full bg-white rounded-3xl p-3 sm:p-4 md:p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer">
    <div
      class="h-52 sm:h-56 md:h-64 rounded-2xl bg-[#EFE8E1] flex items-center justify-center mb-4 overflow-hidden"
    >
      <img 
        :src="product.image" 
        class="w-full h-full object-cover"
      />
    </div>

    <h3 class="font-medium mb-2 text-base sm:text-base md:text-lg">
      {{ product.name }}
    </h3>

    <p class="font-semibold text-[#5DA9A6]">
      {{ product.price }} ₽
    </p>
  </div>
</template>