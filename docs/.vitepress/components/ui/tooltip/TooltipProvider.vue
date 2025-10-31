<script setup lang="ts">
import { TooltipProvider, type TooltipProviderProps } from 'radix-vue'

interface Props extends TooltipProviderProps {}

defineProps<Props>()
</script>

<template>
  <TooltipProvider v-bind="$props">
    <slot />
  </TooltipProvider>
</template>
