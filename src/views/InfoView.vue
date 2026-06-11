<template>
  <div class="bg-[#FDF7F2] min-h-screen">
    <Navbar />

    <main class="px-6 py-10 md:px-12 lg:px-20 bg-[#F3F8F9]">
      <section class="max-w-6xl mx-auto space-y-10">
        <div class="rounded-[3rem] bg-white p-8 md:p-12 shadow-[0_28px_80px_rgba(15,23,42,0.08)] border border-[#E7ECEE]">
          <div class="grid gap-10 xl:grid-cols-[1.05fr_0.95fr] items-center">
            <div class="space-y-6">
              <div class="inline-flex rounded-full bg-[#D9F1F6] px-4 py-2 text-sm font-semibold text-[#2C7B8B]">История Cozy Coffee</div>
              <h1 class="text-4xl md:text-5xl font-bold tracking-tight text-[#102A43]">Уютное место с ароматом свежего кофе</h1>
              <p class="text-gray-700 text-base md:text-lg leading-8">
                Cozy Coffee — это пространство, где каждая чашка готовится с теплом и вниманием к деталям. Мы создаем атмосферу, которая приглашает задержаться и насладиться моментом.
              </p>
              <div class="grid gap-4 sm:grid-cols-2">
                <div class="rounded-[2rem] bg-[#E6F7FB] border border-[#C7E9F2] p-5">
                  <h2 class="text-xl font-semibold mb-2 text-[#1F5366]">Комфорт</h2>
                  <p class="text-gray-700 leading-6">Удобные столики, мягкое освещение и спокойная музыка для отдыха или работы.</p>
                </div>
                <div class="rounded-[2rem] bg-[#FFF5EA] border border-[#F2D8BF] p-5">
                  <h2 class="text-xl font-semibold mb-2 text-[#8A5B35]">Вкус</h2>
                  <p class="text-gray-700 leading-6">Свежеобжаренный кофе, мягкие десерты и проверенные рецептуры, которые хочется повторять.</p>
                </div>
              </div>
            </div>

            <div class="grid gap-6">
              <div class="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#E7ECEE]">
                <img src="/images/info/coffee-shop-1.jpg" alt="Интерьер кофейни" class="w-full h-96 object-cover">
                <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#102A43]/80 to-transparent p-5 text-white">
                  <p class="font-semibold">Уютный интерьер и мягкий свет</p>
                </div>
              </div>
              <div class="grid gap-6 sm:grid-cols-2">
                <div class="rounded-[2rem] overflow-hidden shadow-lg border border-[#E7ECEE]">
                  <img src="/images/info/coffee-shop-2.jpg" alt="Кофе и десерт" class="w-full h-56 object-cover">
                </div>
                <div class="rounded-[2rem] bg-[#E6F7FB] p-5 flex flex-col justify-between border border-[#C7E9F2]">
                  <div>
                    <h3 class="text-xl font-semibold mb-2 text-[#1F5366]">Теплая встреча</h3>
                    <p class="text-gray-700 leading-6">Наша кофейня — место, где хочется оставаться подольше, общаясь с друзьями или работая спокойно.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] items-center">
          <div class="rounded-[2.5rem] bg-[#E6F7FB] p-10 shadow-lg border border-[#C7E9F2]">
            <span class="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#1F5366] mb-4">Миссия</span>
            <h2 class="text-3xl font-semibold mb-4 text-[#102A43]">Готовим с заботой о каждом госте</h2>
            <p class="text-gray-700 leading-8 mb-4">
              Мы считаем, что каждая чашка кофе должна радовать вкусом, создавать настроение и возвращать ощущение домашнего тепла.
            </p>
            <p class="text-gray-700 leading-8">
              Cozy Coffee — это место, где кофе становится поводом встретиться, отдохнуть и почувствовать себя как дома.
            </p>
          </div>
          <div class="rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#E7ECEE]">
            <img src="/images/info/coffee-shop-3.png" alt="Бариста готовит кофе" class="w-full h-full min-h-[360px] object-cover">
          </div>
        </div>

        <section class="grid gap-6 md:grid-cols-3">
          <div class="rounded-[2rem] bg-white p-6 shadow-sm border border-[#E7ECEE]">
            <h3 class="text-xl font-semibold mb-3 text-[#102A43]">Качество</h3>
            <p class="text-gray-700 leading-6">Каждый напиток готовим из свежих ингредиентов и отборных зерен.</p>
          </div>
          <div class="rounded-[2rem] bg-white p-6 shadow-sm border border-[#E7ECEE]">
            <h3 class="text-xl font-semibold mb-3 text-[#102A43]">Уют</h3>
            <p class="text-gray-700 leading-6">Приятный интерьер, мягкие сиденья и спокойная атмосфера для любых встреч.</p>
          </div>
          <div class="rounded-[2rem] bg-white p-6 shadow-sm border border-[#E7ECEE]">
            <h3 class="text-xl font-semibold mb-3 text-[#102A43]">Внимание</h3>
            <p class="text-gray-700 leading-6">Доброжелательные бариста и сервис, который делает каждый визит комфортным.</p>
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

