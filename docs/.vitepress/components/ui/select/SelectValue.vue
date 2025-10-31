<script setup lang="ts">
import { SelectValue, type SelectValueProps } from 'radix-vue'

interface Props extends SelectValueProps {}

defineProps<Props>()
</script>

<template>
  <SelectValue>
    <slot />
  </SelectValue>
</template>
