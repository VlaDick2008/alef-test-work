<script setup lang="ts">
import ChildInfoBlock from '@/components/ChildInfoBlock.vue';
</script>

<template>
  <main class="max-w-2xl mx-auto">
    <div class="mb-10">
      <h1 class="text-xl text-primary font-medium my-7">Персональные данные</h1>
      <div class="flex flex-col gap-2">
        <p class="text-xl font-bold">Василий, 30 лет</p>
      </div>
    </div>

    <div>
      <div class="flex gap-5 items-start flex-col">
        <h1 class="text-xl text-primary font-medium mt-7">Дети</h1>
        <ChildInfoBlock name="Петр" :age="10" />
        <ChildInfoBlock name="Василий" :age="14" />
      </div>
    </div>
  </main>
</template>
