<script setup lang="ts">
import SharedButton from '@/components/SharedButton.vue';
import FormInput from '../components/FormInput.vue';
</script>

<template>
  <main class="flex flex-col items-center gap-5">
    <form class="w-[600px]" action="">
      <h1 class="text-xl text-primary font-medium my-7">Персональные данные</h1>
      <div class="flex flex-col gap-2">
        <FormInput html-for="parent-name" inputLabel="Имя" type="text" />
        <FormInput html-for="parent-age" inputLabel="Возраст" type="number" />
      </div>
    </form>
    <form class="w-[600px]" action="">
      <div class="flex w-full justify-between items-center">
        <h1 class="text-xl text-primary font-medium my-7">Дети (макс. 5)</h1>
        <SharedButton variant="outline"><span class="text-4xl mr-3 leading-none">+</span> Добавить ребёнка
        </SharedButton>
      </div>
      <div class="flex flex-col gap-2">
        <div class="flex gap-2 justify-between mb-5">
          <FormInput html-for="kid-1-name" inputLabel="Имя" type="text" />
          <FormInput html-for="kid-1-age" inputLabel="Возраст" type="number" />
          <SharedButton type="submit" variant="ghost">Удалить</SharedButton>
        </div>
        <SharedButton class="self-start" type="submit" variant="primary">Сохранить</SharedButton>
      </div>
    </form>
  </main>
</template>
