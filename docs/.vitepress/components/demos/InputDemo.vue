<script setup lang="ts">
import Input from '@/components/ui/input/Input.vue'
</script>

<template>
  <div class="w-full max-w-sm space-y-4">
    <Input type="text" placeholder="Email" />
    <Input type="password" placeholder="Password" />
    <Input type="text" placeholder="Disabled" disabled />
  </div>
</template>
