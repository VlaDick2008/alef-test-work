<script setup lang="ts">
import ChildInfoBlock from '@/components/ChildInfoBlock.vue';
import type { Data } from './FormView.vue';
import { ref } from 'vue';

const data = ref<Data>(JSON.parse(localStorage.getItem('data') ?? '{}'))
</script>

<template>
  <main v-if="data.value" class="max-w-2xl mx-auto">
    <div v-if="data.parentName !== ''">
      <div class="mb-10">
        <h1 class="text-xl text-primary font-medium my-7">Персональные данные</h1>
        <div class="flex flex-col gap-2">
          <p class="text-xl font-bold">{{ data.parentName }}, {{ data.parentAge }} лет</p>
        </div>
      </div>

      <div>
        <div v-if="data.amountOfKids.length > 0" class="flex gap-5 items-start flex-col">
          <h1 class="text-xl text-primary font-medium mt-7">Дети</h1>
          <div v-for="childrenBlock in data.amountOfKids" :key="childrenBlock.id">
            <ChildInfoBlock :name="childrenBlock.name" :age="childrenBlock.age" />
          </div>
        </div>
        <div v-else>
          <h1 class="text-xl text-primary font-medium my-7">Дети</h1>
          <p class="text-xl font-bold">Детей нет</p>
        </div>
      </div>
    </div>


  </main>
  <main v-else>
    <p class="text-3xl text-center text-primary font-medium my-7">Вы ещё не заполнили свои данные 😞</p>
  </main>
</template>
