<script setup lang="ts">
import PromoCard from '../ui/PromoCard.vue'
</script>

<template>
  <section class="px-8 py-8 bg-[#FDF7F2]">
    <div class="grid grid-cols-[3fr_1.2fr] gap-6">

      <div
        class="rounded-3xl bg-[#EFE7DE] min-h-[520px] p-12 flex items-center"
      >
        <div class="max-w-md">
          <h1
            class="text-6xl font-bold leading-tight mb-6"
          >
            Вкус, который делает день лучше
          </h1>

          <p class="text-gray-600 mb-8">
            Авторские напитки, свежая выпечка
            и уютная атмосфера рядом с тобой.
          </p>

          <button
            class="bg-[#3B2417] text-white px-6 py-3 rounded-full"
          >
            Смотреть меню →
          </button>
        </div>
      </div>

      <div class="flex flex-col gap-4">

        <PromoCard
          title="Акция недели"
          description="-20% на карамельный раф"
        />

        <PromoCard
          title="Комбо дня"
          description="Латте + хот-дог со скидкой 15%"
        />

        <PromoCard
          title="Сезонное меню"
          description="Клубничная матча и другие новинки"
        />

      </div>

    </div>
  </section>
</template>