<template>
  <div class="bg-[#FDF7F2] min-h-screen">
    <Navbar />

    <main class="px-6 py-10 md:px-12 lg:px-20">
      <section class="max-w-6xl mx-auto space-y-10">
        <div class="rounded-[2rem] bg-white p-8 shadow-xl border border-[#F0E8E0]">
          <div class="grid gap-8 lg:grid-cols-[1fr_0.9fr] items-center">
            <div>
              <h1 class="text-4xl font-bold mb-4">Акции и специальные предложения</h1>
              <p class="text-gray-700 text-base md:text-lg leading-7 mb-6">
                В Cozy Coffee мы регулярно готовим акции, чтобы ваше любимое кофе было ещё доступнее.
                Следите за новыми предложениями и успевайте попробовать ограниченные наборы по выгодной цене.
              </p>
              <p class="text-gray-700 leading-7">
                Здесь собраны актуальные скидки, сезонные предложения и приветственные бонусы для новых гостей.
                У нас есть что-то интересное для любителей кофе, чая и десертов.
              </p>
            </div>
            <div class="rounded-[2.5rem] overflow-hidden shadow-lg">
              <img src="/images/promos/promo-hero.jpg" alt="Акции Cozy Coffee" class="w-full h-96 object-cover">
            </div>
          </div>
        </div>

        <section class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <article class="rounded-[2rem] bg-white p-6 shadow-sm border border-[#F0E8E0]">
            <div class="inline-flex items-center justify-center rounded-full bg-[#FDECE5] px-4 py-2 mb-4 text-sm font-semibold text-[#A54C38]">
              Новинка</div>
            <h2 class="text-2xl font-semibold mb-3">Кофе дня —40%</h2>
            <p class="text-gray-700 leading-7 mb-4">
              Попробуйте наш авторский кофе дня с 40% скидкой каждый будний день с 10:00 до 14:00.
            </p>
            <p class="font-semibold">Действует до 15 июня</p>
          </article>

          <article class="rounded-[2rem] bg-white p-6 shadow-sm border border-[#F0E8E0]">
            <div class="inline-flex items-center justify-center rounded-full bg-[#EEF7FF] px-4 py-2 mb-4 text-sm font-semibold text-[#356B9A]">
              Спецпредложение</div>
            <h2 class="text-2xl font-semibold mb-3">Пакет «Завтрак»</h2>
            <p class="text-gray-700 leading-7 mb-4">
              Скомбинируйте капучино и сырный круассан со скидкой 25% в будние дни до 12:00.
            </p>
            <p class="font-semibold">Акция длится до конца месяца</p>
          </article>

          <article class="rounded-[2rem] bg-white p-6 shadow-sm border border-[#F0E8E0]">
            <div class="inline-flex items-center justify-center rounded-full bg-[#FFF4E5] px-4 py-2 mb-4 text-sm font-semibold text-[#A55A18]">
              Сезонная</div>
            <h2 class="text-2xl font-semibold mb-3">Летний лимонад</h2>
            <p class="text-gray-700 leading-7 mb-4">
              Освежающий лимонад с мятой и ягодами по специальной цене — отличный выбор для тёплого дня.
            </p>
            <p class="font-semibold">Только июнь и июль</p>
          </article>

          <article class="rounded-[2rem] bg-white p-6 shadow-sm border border-[#F0E8E0]">
            <div class="inline-flex items-center justify-center rounded-full bg-[#E9FBEF] px-4 py-2 mb-4 text-sm font-semibold text-[#2F7A55]">
              Бонус</div>
            <h2 class="text-2xl font-semibold mb-3">Подарок за второй напиток</h2>
            <p class="text-gray-700 leading-7 mb-4">
              Купите два напитка и получите десерт «мини-торт» в подарок. Отлично подходит для встреч с друзьями.
            </p>
            <p class="font-semibold">Действует в будние дни</p>
          </article>
        </section>

        <div class="grid gap-6 lg:grid-cols-[1fr_0.9fr] items-center">
          <div class="rounded-[2rem] bg-[#F8F3EE] p-8 shadow-sm border border-[#EFE2D8]">
            <h2 class="text-3xl font-semibold mb-4">Как воспользоваться акцией</h2>
            <ul class="list-disc list-inside text-gray-700 leading-7 space-y-3">
              <li>Выберите понравившееся предложение на этой странице.</li>
              <li>Скажите название акции бариста при оформлении заказа.</li>
              <li>Скидка учитывается автоматически в чеке.</li>
            </ul>
          </div>
          <div class="rounded-[2.5rem] overflow-hidden shadow-lg">
            <img src="/images/promos/promo-card.jpg" alt="Акция в кофейне" class="w-full h-96 object-cover">
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from '../components/layout/Navbar.vue'
import Footer from '../components/layout/Footer.vue'
</script>

