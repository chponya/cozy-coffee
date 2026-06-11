<template>
  <div class="bg-[#F3F8F9] min-h-screen">
    <Navbar />

    <main class="px-6 py-10 md:px-12 lg:px-20">
      <section class="max-w-6xl mx-auto space-y-10">
        <div class="rounded-[2.5rem] bg-white p-8 md:p-10 shadow-xl border border-[#E9F1F3]">
          <div class="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] items-center">
            <div class="space-y-5">
              <span class="inline-flex rounded-full bg-[#D6F2F8] px-4 py-2 text-sm font-semibold text-[#1F6F7B]">Мерч Cozy Coffee</span>
              <h1 class="text-4xl md:text-5xl font-bold tracking-tight text-[#102A43]">Стильные подарки и аксессуары</h1>
              <p class="text-gray-700 text-base md:text-lg leading-8">
                Наш мерч — это способ забрать частичку Cozy Coffee с собой. Кружки, футболки, стикеры и другие милые вещи с кофейным характером.
              </p>
              <p class="text-gray-700 leading-7">
                Пока что здесь заглушки для изображений, но уже скоро появится полноценный каталог, где можно выбрать любимый дизайн и сделать заказ.
              </p>
            </div>
            <div class="rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#E9F1F3]">
              <img src="/images/merch/merch-hero.png" alt="Мерч Cozy Coffee" class="w-full h-96 object-cover">
            </div>
          </div>
        </div>

        <section class="grid gap-6 md:grid-cols-3">
          <article class="rounded-[2rem] bg-white p-6 shadow-sm border border-[#E9F1F3]">
            <div class="rounded-full bg-[#E3F8F9] px-3 py-1 inline-flex text-sm font-semibold text-[#1F6F7B] mb-4">Кружки</div>
            <h2 class="text-2xl font-semibold mb-3 text-[#102A43]">Фирменные чашки</h2>
            <p class="text-gray-700 leading-7 mb-4">Тёплый кофе вкуснее в стильной кружке, которая напоминает о любимой кофейне.</p>
            <div class="rounded-[1.75rem] overflow-hidden shadow-lg">
              <img src="/images/merch/merch-1.webp" alt="Кружка мерч" class="w-full h-52 object-cover">
            </div>
          </article>
          <article class="rounded-[2rem] bg-white p-6 shadow-sm border border-[#E9F1F3]">
            <div class="rounded-full bg-[#FEF4E5] px-3 py-1 inline-flex text-sm font-semibold text-[#8A593D] mb-4">Футболки</div>
            <h2 class="text-2xl font-semibold mb-3 text-[#102A43]">Атмосферные футболки</h2>
            <p class="text-gray-700 leading-7 mb-4">Мягкие футболки с уютными принтами — отличный подарок себе или друзьям.</p>
            <div class="rounded-[1.75rem] overflow-hidden shadow-lg">
              <img src="/images/merch/merch-2.webp" alt="Футболка мерч" class="w-full h-52 object-cover">
            </div>
          </article>
          <article class="rounded-[2rem] bg-white p-6 shadow-sm border border-[#E9F1F3]">
            <div class="rounded-full bg-[#E8F6F8] px-3 py-1 inline-flex text-sm font-semibold text-[#1F6F7B] mb-4">Стикеры</div>
            <h2 class="text-2xl font-semibold mb-3 text-[#102A43]">Стикеры и открытки</h2>
            <p class="text-gray-700 leading-7 mb-4">Весёлые наклейки для ноутбука, кружки и блокнотов — маленькая радость для кофеманов.</p>
            <div class="rounded-[1.75rem] overflow-hidden shadow-lg">
              <img src="/images/merch/merch-3.jpg" alt="Стикеры мерч" class="w-full h-52 object-cover">
            </div>
          </article>
        </section>

        <section class="rounded-[2.5rem] bg-white p-8 md:p-10 shadow-sm border border-[#E9F1F3]">
          <div class="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-center">
            <div>
              <h2 class="text-3xl font-semibold mb-4 text-[#102A43]">Что ещё будет в каталоге</h2>
              <ul class="list-disc list-inside text-gray-700 leading-7 space-y-3">
                <li>Эксклюзивные кружки с фирменным логотипом</li>
                <li>Эстетичные толстовки и шопперы</li>
                <li>Сувенирные наборы с вкусными аксессуарами</li>
              </ul>
            </div>
            <div class="rounded-[2rem] overflow-hidden shadow-lg border border-[#E9F1F3]">
              <img src="/images/merch/merch-4.webp" alt="Ассортимент мерча" class="w-full h-80 object-cover">
            </div>
          </div>
        </section>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from '../components/layout/Navbar.vue'
import Footer from '../components/layout/Footer.vue'
</script>

