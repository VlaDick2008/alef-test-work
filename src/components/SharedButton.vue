<template>
  <button :class="cn('flex items-center px-5 py-2 text-lg rounded-full', {
    'bg-accent text-white': variant === 'primary',
    'text-accent border border-accent bg-white': variant === 'outline',
    'text-accent border-0 bg-transparent': variant === 'ghost',
  })" :type="type">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils';

const props = withDefaults(defineProps<{
  type: "button" | "submit",
  variant: 'primary' | 'outline' | 'ghost',
}>(), { type: 'button' })
</script>