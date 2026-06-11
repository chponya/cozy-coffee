<template>
  <section class="px-8 py-12 bg-[#FDF7F2] ">
    <div
      class="border border-gray-300 rounded-3xl pl-5 pr-10 py-8 bg-[#f2f7f7]  drop-shadow-md"
    >
      <div class="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-6">

        <div>
          
          <div class="flex items-center gap-4">
            <img
              src="/images/quokka/quokka_with_cup.png"
              class="w-40 h-40 shrink-0"
              alt="quokka with cup"
            >

            <div>
              <h2 class="text-xl font-bold mb-3">
                О нашей кофейне
              </h2>

              <p class="text-gray-600">
                Cozy Coffee — место, где можно насладиться
                любимым напитком, уютной атмосферой
                и приятными моментами каждый день.
              </p>
            </div>
          </div>

        </div>

        <FeatureCard
          title="Отборные зерна премиум качества"
          image="/images/icons/beans.svg"
        />

        <FeatureCard
          title="Свежая выпечка каждый день"
          image="/images/icons/bakery.svg"
        />

        <FeatureCard
          title="Уютная атмосфера и дружелюбие"
          image="/images/icons/cozy.svg"
        />

        <FeatureCard
          title="С любовью для каждого гостя"
          image="/images/icons/heart.svg"
        />

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import FeatureCard from '../ui/FeatureCard.vue'
</script>