<template>
  <footer class="px-8 py-12 bg-black text-white">
    <div class="grid grid-cols-4 gap-8">

      <!-- BRAND -->
      <div>
        <h3 class="font-bold mb-3">Cozy Coffee</h3>
        <p class="text-sm text-gray-400">
          Уютная кофейня рядом с тобой
        </p>
      </div>

      <!-- NAVIGATION -->
      <div>
        <h4 class="font-medium mb-3">Навигация</h4>
        <ul class="text-sm text-gray-400 space-y-2">
          <li>
            <RouterLink to="/menu" class="hover:text-white transition">
              Меню
            </RouterLink>
          </li>

          <li>
            <RouterLink to="/promotions" class="hover:text-white transition">
              Акции
            </RouterLink>
          </li>

          <li>
            <RouterLink to="/merch" class="hover:text-white transition">
              Мерч
            </RouterLink>
          </li>

          <li>
            <RouterLink to="/games" class="hover:text-white transition">
              Мини-игры
            </RouterLink>
          </li>
        </ul>
      </div>

      <!-- ACCOUNT -->
      <div>
        <h4 class="font-medium mb-3">Аккаунт</h4>
        <ul class="text-sm text-gray-400 space-y-2">
          <li>
            <RouterLink to="/profile" class="hover:text-white transition">
              Профиль
            </RouterLink>
          </li>

          <li>
            <RouterLink to="/cart" class="hover:text-white transition">
              Корзина
            </RouterLink>
          </li>

          <li>
            <RouterLink to="/bonuses" class="hover:text-white transition">
              Бонусы
            </RouterLink>
          </li>
        </ul>
      </div>

      <!-- SUBSCRIBE -->
      <div>
        <h4 class="font-medium mb-3">Подписка</h4>

        <input
          class="
            w-full
            p-2
            rounded-lg
            text-gray-900
            bg-white
            border border-gray-700
            focus:outline-none
            focus:border-white
            transition
          "
          placeholder="Email"
        />
      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
</script>