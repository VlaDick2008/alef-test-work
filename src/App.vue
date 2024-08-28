<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header>
    <img src="" alt="">
    <div>
      <RouterLink to="/form">Форма</RouterLink>
      <RouterLink to="/preview">Превью</RouterLink>
    </div>
  </header>

  <RouterView />
</template>