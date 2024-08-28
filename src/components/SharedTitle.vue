<template>
  <h2>{{ $props.label }}</h2>
</template>

<script setup lang="ts">
const props = defineProps<{ label: string }>()
</script>