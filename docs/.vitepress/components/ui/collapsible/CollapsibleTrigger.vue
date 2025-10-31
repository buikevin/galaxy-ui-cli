<script setup lang="ts">
import { CollapsibleTrigger, type CollapsibleTriggerProps } from 'radix-vue'

interface Props extends CollapsibleTriggerProps {}

defineProps<Props>()
</script>

<template>
  <CollapsibleTrigger v-bind="$props">
    <slot />
  </CollapsibleTrigger>
</template>
