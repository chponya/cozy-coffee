<script setup lang="ts">
    import Navbar from '../components/layout/Navbar.vue'
    import Footer from '../components/layout/Footer.vue'

    import { computed } from 'vue'
    import { products } from '../data/products'
    import ProductCard from '../components/ui/ProductCard.vue'

const categories = [
  { value: 'coffee', label: 'Кофе' },
  { value: 'tea', label: 'Чай' },
  { value: 'cold-drinks', label: 'Холодные напитки' },
  { value: 'dessert', label: 'Десерты' },
  { value: 'food', label: 'Закуски' }
] as const

const groupedProducts = computed(() => {
  return categories.map(category => ({
    value: category.value,
    label: category.label,
    items: products.filter(p => p.category === category.value)
  }))
})
</script>

<template>
  <div class="bg-[#FDF7F2] min-h-screen">
    <Navbar />

    <!-- HERO BANNER (placeholder пока) -->
    <section class="px-8 py-10">
      <div class="rounded-3xl bg-[#EFE7DE] min-h-[300px] p-10">
        <h1 class="text-4xl font-bold mb-4">
          Меню
        </h1>

        <p class="text-gray-600">
          Выбери любимый напиток или десерт
        </p>
      </div>
    </section>

    <!-- CATEGORY TAGS (заглушка) -->
    <section class="px-8 pb-6">
      <div class="flex flex-wrap gap-3">
        <button
          v-for="category in categories"
          :key="category.value"
          class="px-4 py-2 rounded-full bg-white shadow-sm text-sm"
        >
          {{ category.label }}
        </button>
      </div>
    </section>

    <!-- SECTIONS -->
    <section class="px-8 pb-20 space-y-12">

      <div
        v-for="group in groupedProducts"
        :key="group.value"
      >
        <h2 class="text-2xl font-semibold mb-6 capitalize">
          {{ group.label }}
        </h2>

        <div class="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4 md:gap-6">
          <ProductCard
            v-for="item in group.items"
            :key="item.id"
            :product="item"
          />
        </div>
      </div>

    </section>

    <Footer />
  </div>
</template>