<template>
  <div class="flex flex-col text-lg font-bold justify-start gap-2 px-5 py-3 bg-[#F1F1F1] rounded-md">
    <p>{{ name }}, {{ String(age) }} лет</p>
  </div>
</template>

<script setup lang="ts">
const { name, age } = defineProps<{
  name: string,
  age: number
}>()
</script>