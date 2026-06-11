<script setup lang="ts">
import ProductCard from '../ui/ProductCard.vue'
import { products } from '../../data/products';
</script>

<template>
  <section class="px-10 pt-4">

    <div
      class="flex justify-between items-center mb-8"
    >
      <h2 class="text-3xl font-bold">
        Популярное
      </h2>

        <RouterLink
          to="/menu"
          class="text-lg hover:text-[#A67C52] transition-colors"
        >
          Смотреть все →
        </RouterLink>
    </div>

    <div class="grid grid-cols-5 gap-4 mb-10">

      <ProductCard
        v-for="product in products.slice(0,5)"
        :key="product.id"
        :product="product"
      />  

    </div>

  </section>
</template>