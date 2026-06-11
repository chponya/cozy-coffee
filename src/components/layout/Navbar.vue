<script setup lang="ts">
// import { R } from 'vue-router/dist/index-BQLwgiyK.js';

</script>

<template>
  <nav class="flex items-center justify-between px-8 py-6 bg-[#FDF8F6] drop-shadow-md">
    <RouterLink to="/" class="flex items-center gap-2">
      <img  
        src="/images/quokka/quokka_logo.png"
        alt="Cozy coffee"
        class="h-16 w-auto"
      >
      <span class="text-4xl font-bold logo-font hover:text-[#A67C52] transition-colors">Cozy coffee</span>
    </RouterLink>

    <ul class="flex gap-12 text-base font-medium">
      <RouterLink to="/menu" class="hover:text-[#A67C52] transition-colors">Меню</RouterLink>
      <RouterLink to="/promotions" class="hover:text-[#A67C52] transition-colors">Акции</RouterLink>
      <RouterLink to="/info" class="hover:text-[#A67C52] transition-colors">О нас</RouterLink>
      <RouterLink to="/merch" class="hover:text-[#A67C52] transition-colors">Мерч</RouterLink>
      <RouterLink to="/games" class="hover:text-[#A67C52] transition-colors">Мини-игры</RouterLink>
    </ul>

    <div class="flex gap-6 text-sm">
      <RouterLink to="/cart" class="flex items-center justify-center px-2 py-2 hover:text-[#A67C52] transition-colors">
        <i class="pi pi-shopping-cart text-xl"></i>
      </RouterLink>

      <RouterLink to="/profile" class="flex items-center justify-center px-2 py-2 hover:text-[#A67C52] transition-colors">
        <i class="pi pi-user text-xl"></i>
      </RouterLink>

      <RouterLink
        to="/bonuses"
        class="flex items-center gap-2 bg-[#E0EBEC] px-5 py-2 rounded-full hover:scale-105 transition"
      >
        <span class="font-semibold">120</span>
        <i class="pi pi-star-fill"></i>
      </RouterLink>

    </div>
  </nav>
</template>

<style scoped> 
</style>