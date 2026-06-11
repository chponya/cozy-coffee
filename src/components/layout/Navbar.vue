<script setup lang="ts">
// import { R } from 'vue-router/dist/index-BQLwgiyK.js';

</script>

<template>
  <nav class="flex items-center justify-between px-8 py-6 bg-[#FDF7F2] drop-shadow-md">
    <RouterLink to="/" class="flex items-center gap-2">
      <img  
        src="/images/quokka/quokka_logo.png"
        alt="Cozy coffee"
        class="h-16 w-auto"
      >
      <span class="text-2xl font-semibold logo-font">Cozy coffee</span>
    </RouterLink>

    <ul class="flex gap-6 text-sm font-medium">
      <RouterLink to="/menu">Меню</RouterLink>
      <RouterLink to="/promotions">Акции</RouterLink>
      <RouterLink to="/info">О нас</RouterLink>
      <RouterLink to="/merch">Мерч</RouterLink>
      <RouterLink to="/games">Мини-игры</RouterLink>
    </ul>

    <div class="flex gap-4 text-sm">
      <RouterLink to="/cart">
        <i class="pi pi-shopping-cart"></i>
      </RouterLink>

      <RouterLink to="/profile">
        <i class="pi pi-user"></i>
      </RouterLink>

      <RouterLink to="/bonuses">
        <i class="pi pi-star"></i>
      </RouterLink>
      
    </div>
  </nav>
</template>

<style scoped> 
</style>