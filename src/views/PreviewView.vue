<script setup lang="ts">
import ChildInfoBlock from '@/components/ChildInfoBlock.vue';
import type { Data } from './FormView.vue';

const data: Data = JSON.parse(localStorage.getItem('data') ?? '');
</script>

<template>
  <main class="max-w-2xl mx-auto">
    <div class="mb-10">
      <h1 class="text-xl text-primary font-medium my-7">Персональные данные</h1>
      <div class="flex flex-col gap-2">
        <p class="text-xl font-bold">{{ data.parentName }}, {{ data.parentAge }} лет</p>
      </div>
    </div>

    <div>
      <div class="flex gap-5 items-start flex-col">
        <h1 class="text-xl text-primary font-medium mt-7">Дети</h1>
        <div v-for="childrenBlock in data.amountOfKids" :key="childrenBlock.id">
          <ChildInfoBlock :name="childrenBlock.name" :age="childrenBlock.age" />
        </div>
      </div>
    </div>
  </main>
</template>
