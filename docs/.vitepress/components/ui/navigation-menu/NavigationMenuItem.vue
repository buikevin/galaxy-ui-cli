<script setup lang="ts">
import { NavigationMenuItem, type NavigationMenuItemProps } from 'radix-vue'

interface Props extends NavigationMenuItemProps {}

defineProps<Props>()
</script>

<template>
  <NavigationMenuItem v-bind="$props">
    <slot />
  </NavigationMenuItem>
</template>
