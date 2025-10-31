<script setup lang="ts">
import { MenubarMenu, type MenubarMenuProps } from 'radix-vue'

interface Props extends MenubarMenuProps {}

defineProps<Props>()
</script>

<template>
  <MenubarMenu v-bind="$props">
    <slot />
  </MenubarMenu>
</template>
