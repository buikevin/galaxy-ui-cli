<script setup lang="ts">
import { DropdownMenuLabel, type DropdownMenuLabelProps } from 'radix-vue'
import { cn } from '@/lib/utils'

interface Props extends DropdownMenuLabelProps {
  class?: string
}

const props = defineProps<Props>()
</script>

<template>
  <DropdownMenuLabel
    :class="cn('px-2 py-1.5 text-sm font-semibold', props.class)"
    v-bind="$props"
  >
    <slot />
  </DropdownMenuLabel>
</template>
