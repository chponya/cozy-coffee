<template>
  <section class="px-8 py-12">
    <div
      class="border border-gray-300 rounded-3xl p-8 bg-white"
    >
      <div class="grid grid-cols-[2fr_repeat(4,1fr)] gap-6">

        <div>
          <div class="text-4xl mb-4">
            ☕
          </div>

          <h2 class="text-xl font-bold mb-3">
            О нашей кофейне
          </h2>

          <p class="text-gray-600">
            Cozy Coffee — место, где можно насладиться
            любимым напитком, уютной атмосферой
            и приятными моментами каждый день.
          </p>
        </div>

        <PlaceholderCard title="Свежие ингредиенты" />
        <PlaceholderCard title="Доставка" />
        <PlaceholderCard title="Уютная атмосфера" />
        <PlaceholderCard title="Кофейни рядом" />

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import PlaceholderCard from '../ui/PlaceholderCard.vue'
</script>