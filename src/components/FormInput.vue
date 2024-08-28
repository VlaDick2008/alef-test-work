<template>
  <div class="relative">
    <input
      class="rounded-md px-4 pb-2.5 pt-5 w-full text-sm text-primary border border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-300 peer"
      :type="type" :name="htmlFor" :id="htmlFor" placeholder=" " />
    <label
      class="absolute text-sm text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-4 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
      :for="htmlFor">{{ props.inputLabel }}</label>
  </div>

</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  type: "text" | "number",
  htmlFor: string,
  inputLabel: string
}>(), { type: 'text' })
</script>