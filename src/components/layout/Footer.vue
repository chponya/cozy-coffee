<template>
  <footer class="px-8 py-12 bg-black text-white">
    <div class="grid grid-cols-4 gap-8">
      <div>
        <h3 class="font-bold mb-3">Cozy Coffee</h3>
        <p class="text-sm text-gray-400">
          Уютная кофейня рядом с тобой
        </p>
      </div>

      <div>
        <h4 class="font-medium mb-2">Меню</h4>
        <ul class="text-sm text-gray-400 space-y-1">
          <li>Напитки</li>
          <li>Десерты</li>
          <li>Закуски</li>
        </ul>
      </div>

      <div>
        <h4 class="font-medium mb-2">О нас</h4>
        <ul class="text-sm text-gray-400 space-y-1">
          <li>История</li>
          <li>Команда</li>
          <li>Контакты</li>
        </ul>
      </div>

      <div>
        <h4 class="font-medium mb-2">Подписка</h4>
        <input
          class="w-full p-2 rounded text-grey-800 border-2 border-gray-700"
          placeholder="Email"
        />
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>