<script setup lang="ts">
import PromoCard from '../ui/PromoCard.vue'
</script>

<template>
  <section class="px-8 py-8 bg-[#FDF7F2] ">
    <div class="grid grid-cols-[3fr_1.2fr] gap-6">

      <div
        class="relative overflow-hidden rounded-3xl 
        bg-[#E0EBEC] 
        min-h-[520px] px-14 py-12 flex items-center shadow-xl"
      >
        <img
          src="/images/hero/coffee-cup.png"
          alt=""
          class="absolute right-10 bottom-0 h-[500px]"
        >
        <div class="max-w-[600px]">
          <h1
            class="text-6xl font-extrabold leading-tight mb-6 heading-font"
          >
            Вкус, который делает день лучше
          </h1>

          <p class="text-xl text-gray-600 mb-8 leading-relaxed">
            Авторские напитки, свежая выпечка  уютная атмосфера 
            <br>рядом с тобой
          </p>

          <button
            class="
              bg-[#679FA5]
              text-white
              px-10
              py-4
              text-lg
              rounded-full
              shadow-md
              hover:bg-[#5a361f]
              hover:shadow-lg
              transition-all
              duration-300
            "
          >
          Смотреть меню
          </button>
        </div>
      </div>

      <div class="flex flex-col gap-4">

        <PromoCard
          title="Акция недели"
          description="-20% на карамельный раф"
          image="\images\promos\today.png"
          button-text="Подробнее"
        />

        <PromoCard
          title="Комбо дня"
          description="Латте + хот-дог со скидкой 15%"
          image="\images\promos\combo.png"
          button-text="Выбрать"
        />

        <PromoCard
          title="Сезонное меню"
          description="Клубничная матча и другие новинки"
          image="\images\promos\summer.png"
          button-text="Попробовать"
          />

      </div>

    </div>
  </section>
</template>