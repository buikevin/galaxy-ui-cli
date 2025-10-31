<script setup lang="ts">
import { HoverCardTrigger, type HoverCardTriggerProps } from 'radix-vue'

interface Props extends HoverCardTriggerProps {}

defineProps<Props>()
</script>

<template>
  <HoverCardTrigger v-bind="$props">
    <slot />
  </HoverCardTrigger>
</template>
