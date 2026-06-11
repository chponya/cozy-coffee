<script setup lang="ts">
import ServiceCard from '../ui/ServiceCard.vue'
</script>

<template>
  <div class="grid grid-cols-3 pt-6 pb-12 px-10 gap-6 bg-[#FDF7F2]">
    <ServiceCard
      title="Бонусы"
      description="Копи поинты и получай награды"
      buttonText="Подробнее"
      image="/images/services/bonus.png"
      backgroundColor="#F2F7F7"
      imageClass="right-5 bottom-5 w-46 h-44"
    />

    <ServiceCard
      title="Мини-игры"
      description="Играй и получай бонусы"
      buttonText="Играть"
      image="/images/services/game.png"
      backgroundColor="#FDF8F6"
      imageClass="right-5 bottom-5 w-44 h-42"
    />

    <ServiceCard
      title="Мерч"
      description="Стиль и уют каждый день"
      buttonText="Смотреть"
      image="/images/services/merch.png"
      backgroundColor="#F2F7F7"
      imageClass="right-5 -bottom-0 w-50 h-50"
    />
  </div>
</template>