<script setup lang="ts">
import FormInput from '@/components/FormInput.vue';
import SharedButton from '@/components/SharedButton.vue';
import { ref } from 'vue';

interface Data {
  parentName: string,
  parentAge: number,
  amountOfKids: {
    id: number
    name: string,
    age: number
  }[]
}

const data = ref<Data>({
  parentName: '',
  parentAge: 0,
  amountOfKids: []
})

function pushToLocalstorage() {
  localStorage.setItem('data', JSON.stringify(data.value))
  console.log(data.value);
}
</script>

<template>
  <main class="max-w-2xl mx-auto">
    <form class="mt-10">
      <label class="text-xl text-primary font-medium">Персональные данные</label>
      <div class="flex flex-col gap-2 mt-5">
        <FormInput v-model="data.parentName" html-for="parent-name" inputLabel="Имя" type="text" />
        <FormInput v-model="data.parentAge" html-for="parent-age" inputLabel="Возраст" type="number" />
      </div>
    </form>

    <form @submit.prevent="pushToLocalstorage()">
      <div class="flex w-full justify-between items-center">
        <label class="text-xl text-primary font-medium my-7">Дети (макс. 5)</label>
        <SharedButton @click="data.amountOfKids.push({ id: Math.random(), name: '', age: 0 })"
          v-show="data.amountOfKids.length <= 4" variant="outline">
          <span class="text-4xl mr-3 leading-none">+</span> Добавить ребёнка
        </SharedButton>
      </div>
      <div v-show="data.amountOfKids.length === 0" class="text-center py-10">
        Добавьте детей нажатием на кнопку "Добавить ребёнка"
      </div>
      <div class="flex flex-col" v-for="(kid, i) in data.amountOfKids" :key="kid.id">
        <div class="flex gap-2 justify-between mb-3">
          <FormInput v-model="data.amountOfKids[i].name" html-for="kid-1-name" class="w-full" inputLabel="Имя"
            type="text" />
          <FormInput v-model="data.amountOfKids[i].age" html-for="kid-1-age" class="w-full" inputLabel="Возраст"
            type="number" />
          <SharedButton @click="data.amountOfKids.splice(data.amountOfKids.indexOf(kid), 1)" variant="ghost">
            Удалить
          </SharedButton>
        </div>
      </div>
      <SharedButton class="self-start" type="submit" variant="primary">Сохранить
      </SharedButton>
    </form>
  </main>
</template>
