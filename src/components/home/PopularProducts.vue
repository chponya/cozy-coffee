<script setup lang="ts">
import ProductCard from '../ui/ProductCard.vue'
import ServiceCard from '../ui/ServiceCard.vue'
import { products } from '../../data/products';
</script>

<template>
  <section class="px-8 py-12">

    <div
      class="flex justify-between items-center mb-8"
    >
      <h2 class="text-3xl font-bold">
        Популярное
      </h2>

      <button>
        Смотреть все →
      </button>
    </div>

    <div class="grid grid-cols-5 gap-4 mb-10">

      <ProductCard
        v-for="product in products.slice(0,5)"
        :key="product.id"
        :product="product"
      />  

    </div>

    <div class="grid grid-cols-3 gap-6">

      <ServiceCard
        title="Бонусы"
        description="Копи поинты и получай награды"
      />

      <ServiceCard
        title="Мини-игры"
        description="Играй и получай бонусы"
      />

      <ServiceCard
        title="Мерч"
        description="Стиль и уют каждый день"
      />

    </div>

  </section>
</template>