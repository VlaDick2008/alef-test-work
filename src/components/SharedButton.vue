<template>
  <button :class="cn('flex items-center px-5 py-2 text-lg rounded-full transition-colors', {
    'bg-accent text-white hover:bg-accent/85': variant === 'primary',
    'text-accent border border-accent bg-white hover:bg-accent/5': variant === 'outline',
    'text-accent border-0 bg-transparent hover:underline': variant === 'ghost',
  })" :type="type">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils';

const { type, variant } = withDefaults(defineProps<{
  type: "button" | "submit",
  variant: 'primary' | 'outline' | 'ghost',
}>(), { type: 'button' })
</script>