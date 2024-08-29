<script setup lang="ts">
import FormInput from '@/components/FormInput.vue';
import SharedButton from '@/components/SharedButton.vue';
import { reactive } from 'vue';

const numberOfKids: { id: number; }[] = reactive([])
</script>

<template>
  <main class="max-w-2xl mx-auto">
    <form action="">
      <h1 class="text-xl text-primary font-medium my-7">Персональные данные</h1>
      <div class="flex flex-col gap-2">
        <FormInput v-model="parentName" html-for="parent-name" inputLabel="Имя" type="text" />
        <FormInput v-model="parentAge" html-for="parent-age" inputLabel="Возраст" type="number" />
      </div>
    </form>
    <form action="">
      <div class="flex w-full justify-between items-center">
        <h1 class="text-xl text-primary font-medium my-7">Дети (макс. 5)</h1>
        <SharedButton @click="numberOfKids.push({ id: Math.random() })" v-show="numberOfKids.length <= 4"
          variant="outline">
          <span class="text-4xl mr-3 leading-none">+</span> Добавить ребёнка
        </SharedButton>
      </div>
      <div v-show="numberOfKids.length === 0" class="text-center py-10">Добавьте детей нажатием на кнопку "Добавить
        ребёнка"</div>
      <div class="flex flex-col" v-for="(kidsFormField) in numberOfKids" :key="kidsFormField.id">
        <div class="flex gap-2 justify-between mb-3">
          <FormInput html-for="kid-1-name" class="w-full" inputLabel="Имя" type="text" />
          <FormInput html-for="kid-1-age" class="w-full" inputLabel="Возраст" type="number" />
          <SharedButton @click="numberOfKids.splice(numberOfKids.indexOf(kidsFormField), 1)" variant="ghost">
            Удалить
          </SharedButton>
        </div>
      </div>
      <SharedButton class="self-start" type="submit" variant="primary">Сохранить</SharedButton>
    </form>
  </main>
</template>
