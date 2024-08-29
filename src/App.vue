<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="flex items-center justify-center w-full p-10 border-b relative border-[#111111]/50">
    <img width="250px" class="absolute left-0" src="/logo.svg" alt="logo">
    <div class="flex gap-5 text-lg text-secondary">
      <RouterLink class="hover:underline" to="/form">Форма</RouterLink>
      <RouterLink class="hover:underline" to="/preview">Превью</RouterLink>
    </div>
  </header>

  <RouterView />

  <footer class="bg-[#FAFAFA] absolute top-[calc(100vh-80px)] text-center w-full p-7">all rights reserved</footer>
</template>

<style></style>