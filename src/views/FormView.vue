<script setup lang="ts">
import FormInput from '../components/FormInput.vue';
</script>

<template>
  <main class="flex flex-col items-center">
    <form class="w-[600px]" action="">
      <h1 class="text-2xl text-primary font-medium my-7">Персональные данные</h1>
      <FormInput html-for="abas" inputLabel="Абас" type="text" />
    </form>
  </main>
</template>
