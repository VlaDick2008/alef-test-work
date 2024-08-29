<script setup lang="ts">
import FormInput from '@/components/FormInput.vue';
import SharedButton from '@/components/SharedButton.vue';
import { computed, ref } from 'vue';

export interface Data {
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

const isValidForm = computed(() => data.value.parentName !== '' && data.value.parentAge >= 16)
const isErrorsShown = ref(false)
const isSuccess = ref(false)

const fieldErrors = computed(() => {
  const errors: { name?: string, age?: string } = {}
  if (data.value.parentName === '' && isErrorsShown.value) errors.name = 'Name is required'
  if (data.value.parentAge < 16 && isErrorsShown.value) errors.age = 'Age must be 16 or more'
  return errors
})

function pushToLocalstorage() {
  if (!isValidForm.value) {
    isErrorsShown.value = true
    return
  }

  localStorage.setItem('data', JSON.stringify(data.value))

  isSuccess.value = true
  const resetSuccess = () => {
    isSuccess.value = false
  }
  setTimeout(() => resetSuccess, 3000)
}
</script>

<template>
  <main class="max-w-2xl mx-auto">
    <form class="mt-10">
      <label class="text-xl text-primary font-medium">Персональные данные</label>
      <div class="flex flex-col gap-2 mt-5">
        <FormInput v-model="data.parentName" html-for="parent-name" inputLabel="Имя" type="text" />
        <div v-show="fieldErrors.name" class="text-red-500">Обязательное поле</div>
        <FormInput v-model="data.parentAge" html-for="parent-age" inputLabel="Возраст" type="number" />
        <div v-show="fieldErrors.age" class="text-red-500">Возраст должен быть 16 или более</div>
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
    <p class="mt-5 text-emerald-600" v-show="isSuccess">Ваша запись создана!</p>
  </main>
</template>
