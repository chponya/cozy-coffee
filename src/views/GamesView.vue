<template>
  <div class="bg-[#FDF7F2] min-h-screen">
    <Navbar />

    <main class="px-6 py-10 md:px-12 lg:px-20">
      <section class="max-w-6xl mx-auto space-y-10">
        <div class="rounded-[2.5rem] bg-white p-8 shadow-xl border border-[#EDE8E2]">
          <div class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div class="space-y-4">
              <span class="inline-flex rounded-full bg-[#E3F8F9] px-4 py-2 text-sm font-semibold text-[#1F6F7B]">Игровая комната</span>
              <h1 class="text-4xl md:text-5xl font-bold text-[#1F2937]">Весёлые кофейные игры</h1>
              <p class="text-gray-700 text-base md:text-lg leading-8">
                В Cozy Coffee даже развлечения делают по-кофейному: лёгкие игры, быстрый тест и три забавных задания, чтобы настроение было бодрым, как эспрессо.
              </p>
              <p class="text-gray-700 leading-7">
                Пока что мы оставили классическое оформление с картинками-заглушками, но уже скоро тут появятся настоящие мини-игры и кофейные викторины.
              </p>
            </div>
            <div class="rounded-[2rem] overflow-hidden shadow-2xl border border-[#EDE8E2]">
              <img src="/images/games/games-hero.webp" alt="Кофейная игра" class="w-full h-96 object-cover">
            </div>
          </div>
        </div>

        <section class="grid gap-6 md:grid-cols-3">
          <article class="rounded-[2rem] bg-white p-6 shadow-sm border border-[#EDE8E2]">
            <h2 class="text-2xl font-semibold mb-3 text-[#1F2937]">Игра 1: Найди сорт</h2>
            <p class="text-gray-700 leading-7 mb-4">Посмотри на картинку и угадай, какой сорт кофе изображён. У нас тут три забавных варианта!</p>
            <div class="rounded-[1.75rem] overflow-hidden shadow-lg">
              <img src="/images/games/game-1.webp" alt="Игра 1" class="w-full h-56 object-cover">
            </div>
          </article>
          <article class="rounded-[2rem] bg-white p-6 shadow-sm border border-[#EDE8E2]">
            <h2 class="text-2xl font-semibold mb-3 text-[#1F2937]">Игра 2: Найди пару</h2>
            <p class="text-gray-700 leading-7 mb-4">Соедини кружку кофе с десертом — в этой мини-игре всё просто и весело.</p>
            <div class="rounded-[1.75rem] overflow-hidden shadow-lg">
              <img src="/images/games/game-2.jpg" alt="Игра 2" class="w-full h-56 object-cover">
            </div>
          </article>
          <article class="rounded-[2rem] bg-white p-6 shadow-sm border border-[#EDE8E2]">
            <h2 class="text-2xl font-semibold mb-3 text-[#1F2937]">Игра 3: Брось зёрнышко</h2>
            <p class="text-gray-700 leading-7 mb-4">Весёлый челлендж: представь, что ты бариста и выбираешь идеальное зёрнышко для кофе.</p>
            <div class="rounded-[1.75rem] overflow-hidden shadow-lg">
              <img src="/images/games/game-3.png" alt="Игра 3" class="w-full h-56 object-cover">
            </div>
          </article>
        </section>

        <section class="rounded-[2.5rem] bg-[#E7F6FA] p-8 shadow-sm border border-[#C8E7EE]">
          <div class="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] items-center">
            <div>
              <span class="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#1F6F7B]">Тест</span>
              <h2 class="text-3xl font-semibold mt-4 mb-4 text-[#102A43]">Какой ты кофе?</h2>
              <p class="text-gray-700 leading-8 mb-6">Ответь на пару вопросов и узнай, кем ты был бы, будь ты напитком из Cozy Coffee.</p>
              <ul class="space-y-3 text-gray-700 leading-7">
                <li>• Если ты любишь утреннюю свежесть — ты скорее всего Американо.</li>
                <li>• Если ты мягкий и нежный — возможно, ты латте.</li>
                <li>• Если тебе нравится яркий вкус — поздравляем, ты раф!</li>
              </ul>
            </div>
            <div class="rounded-[2rem] overflow-hidden shadow-lg border border-[#D0E7EB]">
              <img src="/images/games/coffee-quiz.jpg" alt="Тест какой ты кофе" class="w-full h-80 object-cover">
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

